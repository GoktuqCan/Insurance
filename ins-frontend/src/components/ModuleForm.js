import React, { Component } from 'react'
import { FormGroup, Label } from './ui';
import Toast from 'toastr'
import StripeList from './ui/StripeList';

export default class ModuleForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            risks: [],
            types: ["BIKE", "JEWELRY", "ELECTRONICS", "SPORTS"],
            selectedType: "BIKE",
            price: 0,
            outputs: [],
            total: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.addRisk = this.addRisk.bind(this);
        this.removeRisk = this.removeRisk.bind(this);
    }

    calculate() {
        var that = this;
        fetch('http://localhost:8080/api/risk/calculate', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ risks: that.state.risks })
        }).then((resp) => resp.json())
            .then(function (data) {
                if (data.success) {
                    that.setState({
                        outputs: data.outputs,
                        total: data.total
                    })
                } else {
                    Toast.error(data.message)
                }
            }).catch(function (error) {
                Toast.error("Cannot reach server.")
            });
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    addRisk() {
        const s = this.state;
        let risks = s.risks;
        risks.push({ type: s.selectedType, quantity: s.price });
        this.setState({ price: 0, risks: risks })
    }

    removeRisk(risk) {
        let risks = this.state.risks;
        risks.splice(risks.indexOf(risk), 1);
        this.setState({ risks: risks });
    }

    render() {
        const s = this.state;
        const options = s.types.map((t, i) =>
            <option key={i} value={t}>{t}</option>
        );
        const outputData = s.outputs.length == s.risks.length && s.outputs.length > 0 && s.risks.map((r, i) => Object.assign({}, { price: r.quantity, risk: s.outputs[i].quantity }))
        return <div className="row">
            <div className="col-md-12">
                <div className="x_panel" >
                    <div className="x_content" style={{ display: "block" }}>
                        <form className="form-horizontal form-label-left" >
                            <FormGroup>
                                <Label label="Risks" />
                                <div className="col-md-6 col-sm-6 col-xs-12" style={{ display: "flex", alignItems: "center" }}>
                                    <div className="col-md-7 col-xs-7">
                                        <select id="selectedType" onChange={this.handleChange} defaultValue={s.selectedType} className="form-control">
                                            {options}
                                        </select>
                                    </div>
                                    <div className="col-md-2 col-xs-2">
                                        <input type="number" value={s.price} className="form-control" id="price" onChange={this.handleChange} min="0" />
                                    </div>
                                    <div className=" col-md-2 col-xs-2">
                                        <a className="btn btn-default btn-sm" onClick={this.addRisk}>
                                            <span><i className="glyphicon glyphicon-plus" /> Add</span>
                                        </a>
                                    </div>
                                </div>
                                <br /><br /><br />
                                <StripeList
                                    className="col-md-offset-3 col-sm-offset-3 col-md-6 col-sm-6 col-xs-12"
                                    data={s.risks}
                                    render={(risk) =>
                                        <span>
                                            <b>{risk.type} : </b>{risk.quantity}
                                            <a href="#" style={{ float: "right" }} onClick={() => this.removeRisk(risk)}><i className="glyphicon glyphicon-trash"></i></a>
                                        </span>}
                                />
                            </FormGroup>
                            <button type="button" onClick={() => this.calculate()} className="btn btn-primary">Calculate</button>
                            {outputData && <div><span><b>Results</b><br />Tariff Price:{s.total}</span>
                                <br /><br /><br />
                                <StripeList
                                    className="col-md-offset-3 col-sm-offset-3 col-md-6 col-sm-6 col-xs-12"
                                    data={outputData}
                                    render={(o) =>
                                        <span><b>Price : </b>{o.price}    <b>Risk : </b>{o.risk == -1 ? "Cannot give insurance" : o.risk}</span>}
                                />
                            </div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    }
}

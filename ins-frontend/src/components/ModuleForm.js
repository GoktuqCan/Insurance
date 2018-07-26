import React, { Component } from 'react'
import { FormGroup, Label, Input, Modal } from './ui';
import Toast from 'toastr'

export default class ModuleForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bike: 0,
            jewelry: 0,
            electronics: 0,
            sports: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    calculate() {
        var that = this;
        fetch('http://localhost:8080/api/risk/calculate', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(that.state)
        }).then((resp) => resp.json())
            .then(function (data) {
                if (data.success) {
                    that.setState({
                        success: true,
                        successMessage: that.props.messages.groupSaveMessage,
                        error: false,
                        errorMessage: null,
                        saveButtonDisable: true
                    })
                } else {
                    that.setState({
                        success: false,
                        successMessage: null,
                        error: true,
                        errorMessage: that.props.messages.apiCodes[data.message].groupAdd
                    })
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


    render() {
        return <div className="row">
            <div className="col-md-12">
                <div className="x_panel" >
                    <div className="x_content" style={{ display: "block" }}>
                        <form className="form-horizontal form-label-left" >
                            <FormGroup>
                                <Label label="Bike" />
                                <Input id="bike" />
                            </FormGroup>
                            <FormGroup>
                                <Label label="Jewelry" />
                                <Input id="jewelry" />
                            </FormGroup>
                            <FormGroup>
                                <Label label="Electronics" />
                                <Input id="electronics" />
                            </FormGroup>
                            <FormGroup>
                                <Label label="Sports Equipment" />
                                <Input id="sports" />
                            </FormGroup>
                            <button type="button" onClick={() => this.calculate()} data-toggle="modal"
                                data-target="#result_modal" className="btn btn-primary">Calculate</button>
                            <Modal id={"result_modal"} title="Results" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    }
}

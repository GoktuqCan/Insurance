import React from 'react'

function Input(props) {
    return <div className="col-md-6 col-sm-6 col-xs-12">
        <input type={props.type || "number"} id={props.id}
            className="form-control col-md-7 col-xs-12"
            {...props}
        />
    </div>
}

export default Input

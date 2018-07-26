import React from 'react'

function Label(props) {
    return <label className="control-label col-md-3 col-sm-3 col-xs-12" {...props}>
        {props.label}{props.children}
    </label>
}

export default Label

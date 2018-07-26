
import React from 'react'

const Modal = ({ ...props }) => {

    return (<div className="modal fade" id={props.id ? props.id : "myModal"} role="dialog">
        <div className="modal-dialog modal-lg">


            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">{props.title}</h4>
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>)

}

export default Modal


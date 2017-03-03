import React from "react";
import { render } from "react-dom";

export const InputElement = (props) => {
   // console.log(props);
    return (
        <p>
            <input type={props.inputType} name={props.fieldname} placeholder={props.placeholder}
                value={props.value} onChange={props.controlFunc} />
        </p>
    );
}

InputElement.propTypes = {
    inputType: React.PropTypes.oneOf(['text','password']).isRequired,
    fieldname: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string.isRequired,
    value: React.PropTypes.string,
    controlFunc: React.PropTypes.func
}
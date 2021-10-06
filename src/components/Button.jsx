import React from "react";
import "./Button.css";
const Button = (props) => {
    return (
        <div className="button" onClick={props.onClick}>
            <div className="button-text">{props.text}</div>
        </div>
    )
}
export default Button;

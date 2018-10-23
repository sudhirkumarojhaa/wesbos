import React from 'react';

const Button = (props) => {
    return(
        <button className="btn" type="submit" onClick={props.onClick} disabled={props.disabled}>{props.title}</button>
    )
}
export default Button;
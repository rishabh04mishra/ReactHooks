import React from 'react';
import classes from './Input.module.css';
const Input=React.forwardRef((props,ref)=>{
    return (
        <div className={classes.input}>
            <label htmlFor={props.nput.id}>{props.label}</label>
            <input ref={ref} {...props.nput}></input>
        </div>
    );
});

export default Input;
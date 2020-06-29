import React from 'react';
import './Person.css'

const person = (props)=>{
    return(
        <div className="Person">
            <h1 onClick={props.click1}>I am from {props.name} and I am {props.age} years old!</h1>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChanged} value={props.name}></input>
        </div>
    );
}

export default person;

import React from 'react';
import "../App.css";

function Language(props){
    //each language weill ghabe its wn component and the language can be given state in the dropdown and the request
    //what if we map through the vocal hash and return each value but we also need the key too
    
    return(<>
        <img src = {props.img} alt="logo"/>
        <h1> This is the {props.name} language</h1>
        <p>{props.details}</p> 
        <p>{props.voc}</p> 
              
    </>)
}


export default Language;
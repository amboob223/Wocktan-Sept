import React from "react";
import "../App.css";

//this components will take the props and get fed data from the Card data file and be scrollable in the scroller component which will be a parent container for the card
// we doing it this way because the size depends on if we hit the button not a list of data
//map when we want to allow inpit size to change and not be fixed
function Card(props){
    //js portion

    //jsxportion which is why we use {}
    return(<div>
        <img src={props.img} alt="logo"/>
        <h1>{props.name}</h1>
        <p>{props.des}</p>
    </div>)
}

export default Card;
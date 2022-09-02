import React from 'react';
import "../App.css";
import Card from "./Card";
import {CardData} from "./CardData" 
import {useState} from "react";



function Scroller(){
    //here is the js partwaiting we make arrays with all the card data and we will use state to control the buttons by movibg the posotioon of shit in the array.
    const pics = CardData.map(function(lang){return lang.img})
    const names = CardData.map(function(lang){return lang.name})
    const descrip = CardData.map(function(lang){return lang.des})

    // use state

    const [idx,setIdx]=useState(0)
    
    function next(){// I think because we putting it in a button and we not passing it in on click event its automatic
       if (idx < CardData.length -1 ){
           setIdx(idx +1)
       }
    }

    function back(){
        if( idx > 0){
            setIdx(idx -1)
        }
    }
    // so we use the state to change position of what gets passed in the scroller.
    return (<>
        <div>
            <Card
            img={pics[idx]}
            name={names[idx]}
            des={descrip[idx]}
            />
        </div>
        <button onClick={back}>Back</button>
        <button onClick={next}>Next</button>
    </>)
}

export default Scroller;
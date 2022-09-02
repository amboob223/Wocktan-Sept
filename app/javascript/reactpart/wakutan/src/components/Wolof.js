import React from 'react';
import "../App.css";
import Language from "./Language";
import {langdata} from "./langData"; 


function Wolof(){
    return(<>
    <Language
        img={langdata[0].pic}
         name={langdata[0].title}
        details={langdata[0].details}
        grammar={langdata[0].grammar}
    />
    </>)
}

export default Wolof;
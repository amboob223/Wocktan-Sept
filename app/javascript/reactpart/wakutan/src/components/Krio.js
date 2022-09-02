import React from "react";
import "../App.css";
import Language from "./Language";
import {langdata} from "./langData"; 


function Krio(){
    return(<>
        <Language
            img={langdata[0].pic}
            name={langdata[0].title}
            details={langdata[0].details}
        
            
        />
    </>)
}

export default Krio;
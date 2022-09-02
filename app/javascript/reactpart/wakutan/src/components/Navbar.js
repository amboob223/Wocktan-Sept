import React from "react";
import "../App.css"
import {Link} from "react-router-dom";
import DropDown from "./Dropdown";
import {useState} from "react";


function Navbar(){
    //we use state to see if we hove and on the event we do a certain code
    const [dropDown,setDropDown] = useState(false)

    function onmouseover(event){
        setDropDown(!dropDown)
    }

    function onmouseleave(event){
        setDropDown(false)
    }

    return(<>

        <nav className="nav">
            <ul className="navitems">
                <li>
                    <Link
                        to="/about"
                        className="navlink"
                        >
                        About    
                        </Link>
                    </li>
                <li 
                    onMouseLeave={onmouseleave}
                    >
                    <Link
                        to="/language"
                        className="navlink"
                        onMouseOver={onmouseover}
                        
                        >
                        Language    
                        </Link>
                        {dropDown && <DropDown/>}
                    </li>
                <li>
                    <Link
                        to="/contact"
                        className="navlink"
                        >
                        Contacts    
                        </Link>
                    </li>
            </ul>
        </nav>

    </>)
}

export default Navbar;
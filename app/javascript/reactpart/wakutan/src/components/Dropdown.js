import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import {Dropdata} from "./Dropdata.js";


function Dropdown(){
    return (<div className='drop'>
                <ul className="droplist">
                   {Dropdata.map(function(data,index){
                return (
                        <li key={index}>
                            <Link 
                            to={data.path}
                            className={data.cname}
                            >
                               {data.name}  
                        </Link>
                           
                        </li>
                   )})} 
                 </ul>
    </div>)
}
//   we make the object here so it can be a returned arry of list that will change in size depending on the data we guive it
                
export default Dropdown;
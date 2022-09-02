import React from "react";
import "../App.css";
import {useState} from "react";



function Contact(){

    //we will use state to keep track of the form data and send it up to the api and get and alert back when we are sucessfull
    
    const [formData,setFormData] = useState(
        {
            firstname:"",
            lastname:"",
            email:"",
            beawock:false,
            getawock:false
        }
        )

        //we will make state methods of formhandler which handles a change event

        function formHandler(event){
            const {name,type,checked,value} = event.target//we use object deconstructing
            setFormData(formData=>{
                return{
                    ...formData,
                    [name]:type ==="checkbox" ? checked : value
                }
            })
        }

        function submitHandler(event){
            event.preventDefault()
            alert("the form has been submitted")
            console.log(formData)
        }

    return(
        <>
            <form onSubmit={submitHandler}>
                <input
                    type="name"
                    name="firstname"
                    id="firstname"
                    value={formData.firstname}
                    onChange={formHandler}
                    placeholder="firstname"
                    />,
                     <input
                    type="name"
                    name="lastname"
                    id="lastname"
                    value={formData.lastname}
                    onChange={formHandler}
                    placeholder="lastname"
                    />,
                     <input
                    type="name"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={formHandler}
                    placeholder="email"
                    />,
                     <input
                    type="checkbox"
                    name="beawock"
                    id="beawock"
                    checked={formData.beawock}
                    onChange={formHandler}
                    />,
                     <input
                    type="checkbox"
                    name="getawock"
                    id="getawock"
                    checked={formData.getawock}
                    onChange={formHandler}
                 
                    />
                <button> submit</button>
            </form>
        </>
    )
}

export default Contact;
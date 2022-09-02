import React from 'react';
import './App.css';
import Scroller from"./components/Scroller";
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import About from "./components/About";
import Language from "./components/Language";
import Krio from "./components/Krio";
import Wolof from "./components/Wolof";
import Twi from "./components/Twi";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      
      
        <Routes>
          <Route path = "/" exact element ={<Home/>}/>
          <Route path = "/about" element={<About/>}/>
          <Route path = "/language" element = {<Language/>}/>
          <Route path = "/krio" element = {<Krio/>}/>
          <Route path = "/wolof" element = {<Wolof/>}/>
          <Route path = "/twi" element = {<Twi/>}/>
          <Route path = "/contact" element = {<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

function Home(){
  return(<>
  
  <Scroller/>
  </>)
}
export default App;







import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Outer from './outer';


function App() { 
  /////////////////////////////////////////////////////////// 
  ///////////////////////////////////////////////////////////
   const [input , setinput] = useState();
   const [state , setstate] = useState([]);
  /////////////////////////////////////////////////////////// 
   const search = ()=>{ 
    axios.get(`https://api.weatherapi.com/v1/current.json?key=b44089cbcae74fd69b3153515242602&q=`+input+`&aqi=egypt`).then(
    response => {
        setstate([ 
        response.data.location.name ,
        response.data.location.lat , 
        response.data.location.lon , 
        response.data.location.country , 
        response.data.current.condition.text
        ])
    }).catch(
    error => {
      console.log(error.code);
    })}
  return (
    <>
       <input value={input} onChange={(e)=>{setinput(e.target.value)}} />
       <button onClick={search}>Search</button>
       <Outer props={state}/>
    </>
  );
}

export default App;
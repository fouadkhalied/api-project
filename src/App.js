





import React, { useRef, useState } from 'react';
import './App.css';
import axios from 'axios';
import Outer from './outer';
const df = 'https://m.media-amazon.com/images/G/01/ui/loadIndicators/loading-large_labeled._CB485921664_.gif'



function App() { 
  ///////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////
   const [input , setinput] = useState("");
   const [state , setstate] = useState([]);
   const [loading , setloading] = useState(false);
   const inputref = useRef(null);
  //////////////////////////////////////////////////////////
  const handle = (src)=>{
    if(src[2]) {
      let v = 15; 
      const it = document.querySelector(".items ul");
      it.innerHTML = ''
      src.map((item , index)=>{
          setTimeout(()=>{
              index == src.length-1 ? setloading(false) : setloading(true)
              const newListItem = document.createElement("li");
              newListItem.textContent = item
              it.appendChild(newListItem)
          } , v * 50 * index)
      })
  } 
  }
  /////////////////////////////////////////////////////////// 
   const search = ()=>{
    const api = input
    axios.get(`https://api.weatherapi.com/v1/current.json?key=b44089cbcae74fd69b3153515242602&q=`+api+`&aqi=egypt`).then(
    response => {
        setstate([ 
        "name is " + response.data.location.name ,
        "lattidude is " + response.data.location.lat , 
        "longitude is " + response.data.location.lon , 
        "country is " + response.data.location.country , 
        "condition is " + response.data.current.condition.text
        ])
        handle(state)
    }).catch(
    error => {
      console.log(error.code);
    })
  }
  return (
    <>
       <div className='div10'>
        <h3 style={{color : 'white'}}>Type the country you want to search</h3>
       <div className='div1'>
       <input type='text' value={input} onChange={(e)=>{setinput(e.target.value)}}/>
       <img src={df} style={{display : loading ? 'block' : 'none'}} width="50px" height="40px" />
       </div>
       <div className='items'>
               <ul>

               </ul>
            </div>
       <button onClick={search}>Search</button>
       </div>
       

    </>
  );
}

export default App;
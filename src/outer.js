







import './App.css';
import { useState } from 'react';


const Outer = ({props})=>
{
    console.log("success");   
    
    if(props[2]) {
        let v = 15; 
        const it = document.querySelector(".items ul");
        it.innerHTML = ''
        props.map((item , index)=>{
            setTimeout(()=>{
                const newListItem = document.createElement("li");
                newListItem.textContent = item
                it.appendChild(newListItem)
            } , v * 50 * index)
        })
    } 
    let v= 21; 
    console.log(props);
    return(
        <div>
            <div className='items'>
               <ul>

               </ul>
            </div>
        </div>
    )
}

export default Outer;


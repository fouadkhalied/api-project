







import './App.css';
import { useState } from 'react';
const df = 'https://m.media-amazon.com/images/G/01/ui/loadIndicators/loading-large_labeled._CB485921664_.gif'

const Outer = ({props})=>
{
    console.log("success");   
    const [loading , setloading] = useState(false);

    // if(c[2]) {
    //     let v = 15;
    //     for (let i=0 ; i<c.length ; i++) {
    //       
    //     }
    //   }
    //   else
    //       console.log(c); 
    let v= 21; 
    console.log(props);
    return(
        <div>
            <img src={df} style={{display : loading ? 'block' : 'none'}} />
           <ul>
           {
            props.forEach((obj , index)=>{
                return props.length > 0 ?
                        setTimeout(() => {
                           return <li>{obj}</li>
                        }, 50 * v * index)
                : "no items to display"
            })
           }
           </ul>
        </div>
    )
}

export default Outer;


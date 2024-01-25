import Axios from 'axios';
import React, { useState } from 'react'
import "./weather.css";

const KEY='5d0de528783a74085837040fa50b6131';

function Weather() {

    const [city,setCity]=useState("");
    const [data,setData]=useState();

    const fetchData=async()=>{

        try{
const response=await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
setData(response.data);
console.log(response.data);
        }
        catch(err){
            alert('please enter city name');
        }
    }
    

    
  
  return (
    <div className='weather'>
     <h1 className='head'>weather app</h1>
     <div>
        <input type="text" className='text'value={city} onChange={e=>setCity(e.target.value)} placeholder="Enter city" >
        </input>
        <button className='btn' onClick={fetchData} >search</button>

     </div>
     <div>
        {data && (
           <div className='container'>
          <h1 className='city_name'>{data.name},{data.sys.country}</h1>  
          <div className='wether_info'>
            <div>
              <h5 className='text2'>Temperature:{Math.round(data.main.temp)} C</h5>  
            </div>
            <div>
            <h5 className='text3'> humidity:{data.main.humidity}</h5>  
            </div>
            <div>
            <h5 className='text4'> wind speed:{data.wind.speed}</h5>  
            </div>
            <div>
            <h5 className='text5'> weather description:{data.weather[0].description}</h5>  
            </div>
          </div>
           </div>
        )}
     </div>
        </div>
  )
}

export default Weather
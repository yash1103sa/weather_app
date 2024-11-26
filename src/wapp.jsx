import SearchBox from './searchBox'
import DisplayCard from './display'
import React, { useState } from 'react'

export default function Wapp () {

  const[weatherInfo , setWeatherInfo]=useState({
    Humidity: 34,
    MaxTemp: 28.99,
    MinTemp: 28.99,
    Weather: "smoke",
    temp: 28.99,
    city: "delhi",
  });

  const updateInfo=(result)=>{
    setWeatherInfo(result);
  }

  return (
    <div>
        <SearchBox updateInfo={updateInfo}/>
        <DisplayCard info={weatherInfo}/>
    </div>
  )
}

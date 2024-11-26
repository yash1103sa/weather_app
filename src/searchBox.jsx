import * as React from "react";
import "./searchBox.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({updateInfo}) {
  const [city, setCity] = useState("");

  const API_URL="https://api.openweathermap.org/data/2.5/weather";
  const API_KEY="cb54b119fb4a95b0131fe33c0ed50a5a";

  let getWaetherInfo = async (city) =>{
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
      let jsonResponse = await response.json();
    //   console.log(jsonResponse);
      let result = {
        city:city,
        temp:jsonResponse.main.temp,
        MinTemp:jsonResponse.main.temp_min,
        MaxTemp:jsonResponse.main.temp_max,
        Humidity:jsonResponse.main.humidity,
        Weather:jsonResponse.weather[0].description,
      }
      console.log(result);
      return result;
    }

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit =async (e) => {
    e.preventDefault();
    console.log(city);
    setCity("");
   let info = await getWaetherInfo(city);
   updateInfo(info);
  };


  return (
    <div className="searchbox">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="on"
        >
          <TextField
            id="outlined-basic"
            label="city"
            variant="outlined"
            value={city}
            onChange={handleChange}
          />
          <br></br>
          <Button variant="contained" type="submit">
            Search
          </Button>
        </Box>
      </form>
    </div>
  );
}

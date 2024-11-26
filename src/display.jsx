// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import CardActionArea from "@mui/material/CardActionArea";
// // cold
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// // sun
// import WbSunnyIcon from '@mui/icons-material/WbSunny';   
// // rain
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
// import "./display.css";

// export default function DisplayCard({ info }) {
//   const cold_url = "https://assets.haspod.com/blog/health/icy-cold.jpg";
//   const rain_url = "https://wallpapercave.com/wp/wp2925654.png";
//   const hot_url =
//     "https://media.citizen.co.za/wp-content/uploads/2023/09/Hot-Weather.jpg";

//   return (
//     <div className="infoholder">
//       <Card>
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             image={
//               info.Humidity > 80 ? rain_url : info.temp > 27 ? hot_url :info.temp < 26 ? cold_url :"search you city"
//             }
//             alt="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {info.city} &nbsp; {
//               info.Humidity > 80 ? <ThunderstormIcon/> : info.temp > 27 ? <WbSunnyIcon/> :info.temp < 26 ? <AcUnitIcon/> :""
//             }
//             </Typography>
//             <Typography variant="body2" sx={{ color: "text.secondary" }}>
//               Humidity: {info.Humidity}, <br />
//               MaxTemp: {info.MaxTemp}&deg;C, <br />
//               MinTemp: {info.MinTemp}&deg;C, <br />
//               Weather: {info.Weather}, <br />
//               temp: {info.temp}&deg;C,
//               <br />
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//     </div>
//   );
// }


import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit"; // cold
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // sun
import ThunderstormIcon from "@mui/icons-material/Thunderstorm"; // rain
import "./display.css";

export default function DisplayCard({ info }) {
  const cold_url = "https://c0.wallpaperflare.com/preview/70/522/440/cold-environment-flora-zing.jpg";
  const rain_url = "https://wallpapercave.com/wp/wp2925654.png";
  const hot_url =
    "https://static.vecteezy.com/system/resources/previews/030/317/681/non_2x/climates-mark-cracked-desert-land-exposes-harsh-impact-of-changing-environment-vertical-mobile-wallpaper-ai-generated-free-photo.jpg";

  const weatherIcon =
    info.Humidity > 80 ? (
      <ThunderstormIcon />
    ) : info.temp > 27 ? (
      <WbSunnyIcon />
    ) : (
      <AcUnitIcon />
    );

  const weatherImage =
    info.Humidity > 80
      ? rain_url
      : info.temp > 27
      ? hot_url
      : info.temp < 26
      ? cold_url
      : "https://via.placeholder.com/400";

  return (
    <Card className="display-card">
      <div className="image-section" style={{ backgroundImage: `url(${weatherImage})` }}></div>
      <div className="details-section">
        <Typography variant="h4" className="city-name">
          {info.city} {weatherIcon}
        </Typography>
        <Typography variant="body1" className="weather-info">
          <strong>Humidity:</strong> {info.Humidity}% <br />
          <strong>Max Temp:</strong> {info.MaxTemp}&deg;C <br />
          <strong>Min Temp:</strong> {info.MinTemp}&deg;C <br />
          <strong>Weather:</strong> {info.Weather} <br />
          <strong>Current Temp:</strong> {info.temp}&deg;C
        </Typography>
      </div>
    </Card>
  );
}

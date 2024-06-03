// import "./curr_wea.css"
// import React from "react";


// const CurrentWeather = ({data}) => {
//     return (
//         <div className="weather">
//             <div className="top">
//                 <div>
//                     <p className="city">{data.city}</p>
//                     <p className="weather-description">{data.weather[0].description}</p>
//                 </div>
//                 <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
//             </div>
//             <div className="bottom">
//                 <p className="temp">{Math.round(data.main.temp)}°C</p>
//                 <div className="deets">
//                     <div className="par-row">
//                         <span className="par-label-top">details</span>
//                     </div>
//                     <div className="par-row">
//                         <span className="par-label">Feels like</span>
//                         <span className="par-value"> {Math.round(data.main.feels_like)}°C</span>
//                     </div>
//                     <div className="par-row">
//                         <span className="par-label">Wind</span>
//                         <span className="par-value">{data.wind.speed} m/s</span>
//                     </div>
//                     <div className="par-row">
//                         <span className="par-label">Humidity</span>
//                         <span className="par-value">{data.main.humidity}%</span>
//                     </div>
//                     <div className="par-row">
//                         <span className="par-label">Pressure</span>
//                         <span className="par-value">{data.main.pressure}hPa</span>
//                     </div>
//                 </div>


//             </div>
//         </div>
//     );
// }

// export default CurrentWeather;

import React, { useEffect, useRef } from "react";
import "./curr_wea.css";

const CurrentWeather = ({ data }) => {
    const weatherRef = useRef(null);

    useEffect(() => {
        const weatherElement = weatherRef.current;
        const cityElement = weatherElement.querySelector(".city");
        
        // Check if the city name is overflowing
        if (cityElement.scrollWidth > cityElement.clientWidth) {
            // Increase the height of the weather container
            weatherElement.style.height = 'auto';
            weatherElement.style.paddingBottom = '20px';
        }
    }, [data]);

    return (
        <div className="weather" ref={weatherRef}>
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temp">{Math.round(data.main.temp)}°C</p>
                <div className="deets">
                    <div className="par-row">
                        <span className="par-label-top">details</span>
                    </div>
                    <div className="par-row">
                        <span className="par-label">Feels like</span>
                        <span className="par-value"> {Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="par-row">
                        <span className="par-label">Wind</span>
                        <span className="par-value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="par-row">
                        <span className="par-label">Humidity</span>
                        <span className="par-value">{data.main.humidity}%</span>
                    </div>
                    <div className="par-row">
                        <span className="par-label">Pressure</span>
                        <span className="par-value">{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;

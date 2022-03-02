import React from "react";
import clearDay from "../assets/animated/clear-day.svg";
import rainDay from "../assets/animated/rain-day.svg";
import thunderstormNight from "../assets/animated/thunderstorm-night.svg";
import clearNight from "../assets/animated/clear-night.svg";


export const SplashScreen = ({ display }) => {

    switch (display) {
        case true:
            return (
                <div className="splashscreen-container">
                    <h1>Welcome to WeatherApp!</h1>
                    <div className="icons-container">
                        <img src={clearDay} alt="clear day"/>
                        <img src={rainDay} alt="rainy day"/>
                        <img src={thunderstormNight} alt="thunderstorm"/>
                        <img src={clearNight} alt="clear night"/>
                    </div>
                </div>
            )
        case false:
            return null;
        default:
            return null;
    }
}
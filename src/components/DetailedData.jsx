import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faWater } from '@fortawesome/free-solid-svg-icons'

export const DetailedData = (props) => {
    const windFinder = (props) => {
        let windDirection = ''
        if (props.weatherData.windDirection >= 348.75) {
            windDirection = 'North'
        } else if (props.weatherData.windDirection <= 11.25) {
            windDirection = 'North'
        } else if (props.weatherData.windDirection <= 33.75) {
            windDirection = 'North by Northeast'
        } else if (props.weatherData.windDirection <= 56.25) {
            windDirection = 'Northeast'
        } else if (props.weatherData.windDirection <= 78.75) {
            windDirection = 'East by Northeast'
        } else if (props.weatherData.windDirection <= 101.25) {
            windDirection = 'East'
        } else if (props.weatherData.windDirection <= 123.75) {
            windDirection = 'East by Southeast'
        } else if (props.weatherData.windDirection <= 146.25) {
            windDirection = 'Southeast'
        } else if (props.weatherData.windDirection <= 168.75) {
            windDirection = 'South by Southeast'
        } else if (props.weatherData.windDirection <= 191.25) {
            windDirection = 'South'
        } else if (props.weatherData.windDirection <= 213.75) {
            windDirection = 'South by Southwest'
        } else if (props.weatherData.windDirection <= 236.25) {
            windDirection = 'Southwest'
        } else if (props.weatherData.windDirection <= 258.75) {
            windDirection = 'West by Southwest'
        } else if (props.weatherData.windDirection <= 281.25) {
            windDirection = 'West'
        } else if (props.weatherData.windDirection <= 303.75) {
            windDirection = 'West by Northwest'
        } else if (props.weatherData.windDirection <= 326.25) {
            windDirection = 'Northwest'
        } else if (props.weatherData.windDirection <= 348.74) {
            windDirection = 'North by Northwest'
        }

        return windDirection
    }

    return (
        <div className="detaileddata-container">
            {(typeof props.weatherData.gradientPrompt != "undefined") ? (
                <div>
                    <div id="weatherDescription">
                        <p>{props.weatherData.weatherDescription}</p>
                    </div>
                    <div className="detaileddata-container2">
                        <div id="wind">
                            <FontAwesomeIcon icon={faWind} size="lg" />
                            <div id="wind-description">
                                <p>{props.weatherData.windSpeed} kph</p>
                                <p>{windFinder(props)}</p>
                            </div>
                        </div>
                        <div id="humidity">
                            <FontAwesomeIcon icon={faWater} size="lg" />
                            <div id="humidity-description">
                                <p>{props.weatherData.humidity}%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : ("")}
        </div>
    )
}
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faWater } from '@fortawesome/free-solid-svg-icons'
import { faUmbrella } from '@fortawesome/free-solid-svg-icons'

export class DetailedData extends React.Component {
    render() {
        return (
            <div className="detaileddata-container">
                <div id="wind">
                    <FontAwesomeIcon icon={faWind} size="2x"/>
                    <div id="wind-description">
                        <p>30 kph</p>
                        <p>South</p>
                    </div>
                </div>
                <div id="humidity">
                    <FontAwesomeIcon icon={faWater} size="2x"/>
                    <div id="humidity-description">
                        <p>30%</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div id="rain">
                    <FontAwesomeIcon icon={faUmbrella} size="2x" />
                    <div id="rain-description">
                        <p>0%</p>
                        <p>Chance</p>
                    </div>
                </div>
            </div>
        )
    }
}
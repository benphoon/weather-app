import React from "react";

export class TodayTemps extends React.Component {
    render() {
        return (
            <div className="temp-container">
                <h1 className="current-temp">35°C</h1>
                <div className="min-max">
                    <p>Max 36°C</p>
                    <p>Min 16°C</p>
                </div>
            </div>
        )
    }
}
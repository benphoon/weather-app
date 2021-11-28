import React from "react";
import { DayTime } from "./DayTime";
import { TodayTemps } from "./TodayTemps";

export class BasicData extends React.Component {
    render() {
        return (
            <div className="basicdata-container">
                <TodayTemps />
                <DayTime />
            </div>
        )
    }
}
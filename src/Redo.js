import { CitySearch } from "./components/CitySearch";
import BasicData from "./components/BasicData";
import { useState } from "react/cjs/react.development";
import { DetailedData } from "./components/DetailedData";
import bpLogo from "./assets/bp-logo-black.png"
import { SplashScreen } from "./components/SplashScreen";


function Redo() {

    const [displaySplash, setDisplaySplash] = useState(true);
    const [data, setData] = useState({});
    const handleSearch = (result) => {
        // set state
        setDisplaySplash(false)
        setData({
            city: result.name,
            country: result.sys.country,
            currentTemp: Math.floor(result.main.temp),
            minTemp: Math.floor(result.main.temp_min),
            maxTemp: Math.ceil(result.main.temp_max),
            gradientPrompt: result.weather[0].main,
            weatherDescription: result.weather[0].description,
            humidity: result.main.humidity,
            windSpeed: result.wind.speed,
            windDirection: result.wind.deg,
            currentTime: result.dt,
            sunrise: result.sys.sunrise,
            sunset: result.sys.sunset
        })
        console.log(data)
    }


    return (
        <div className='app'>
            <main>
                <div className="background-container">
                </div>
                <CitySearch
                    handleSearch={handleSearch}
                />
                <SplashScreen display={displaySplash} />
                <BasicData
                    weatherData={data}
                />
                <div className="divider"> </div>
                <DetailedData
                    weatherData={data}
                />
                <img
                    id="bpLogo"
                    src={bpLogo}
                    alt="Ben Phoon Logo"
                />
            </main>
        </div>
    );
}

export default Redo;


// To Do
// - Handle Errors
// - How to reset icon state
// - Hook up some sort of destination library to search bar/input (Google Places API)
// - Build another version using Google Earth API. Have background of app be moving globe which centres on city depending on search input (which would return a value which can be plugged into background image?)
// - Use above to do forecast
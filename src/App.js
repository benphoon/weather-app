import "./App.css";
import { CitySearch } from "./components/CitySearch";
import { BasicData } from "./components/BasicData";
import { CurrentWeatherIcon } from "./components/CurrentWeatherIcon";

function App() {
    return (
        <div className="app-container">
            <div className="app">
                <header className="App-header">
                </header>
                <body>
                    <CitySearch />
                    <BasicData />
                    <CurrentWeatherIcon />
                </body>
            </div>
        </div>
    );
}

export default App;

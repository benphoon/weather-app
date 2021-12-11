import "./App.css";
import { CitySearch } from "./components/CitySearch";
import { BasicData } from "./components/BasicData";
import { Forecast } from "./components/Forecast";
import { DayTime } from "./components/DayTime";


function App() {
    return (
        <div className="app-container">
            <div className="app-window">
                <div className="app">
                    <header className="App-header">
                    </header>
                    <body>
                        <div id="background-top">
                            <CitySearch />
                            <DayTime />
                        </div>
                        <BasicData />
                        <div id="background-bottom">
                            <Forecast />
                        </div>
                    </body>
                </div>
            </div>
        </div>
    );
}

export default App;

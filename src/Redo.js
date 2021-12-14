import { CitySearch } from "./components/CitySearch";
import { BasicData } from "./components/BasicData";
import { Forecast } from "./components/Forecast";
import { DayTime } from "./components/DayTime";


function Redo() {
    return (
        <div className='app'>
            <main>
                <CitySearch />
                <BasicData />
                <Forecast />
            </main>
        </div>
    );
}

export default Redo;


// To Do
// - Complete javascript functionality
// - Hook up some sort of destination library to search bar/input
// - Build another version using Google Earth API. Have background of app be moving globe which centres on city depending on search input (which would return a value which can be plugged into background image?)
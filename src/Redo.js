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
            </main>
        </div>
    );
}

export default Redo;

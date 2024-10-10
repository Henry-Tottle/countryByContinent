import {JSX} from "react";
import CountryList from "../CountryList";
import {Routes, Route} from 'react-router-dom';

function CountryBox(): JSX.Element {



    return (
<>
        <div className='border-4 rounded-2xl grid grid-cols-3 shadow-2xl'>
            <Routes>
                <Route path={'africa'} element={<CountryList continent={'africa'}/>}/>
                <Route path={'asia'} element={<CountryList continent={'asia'}/>}/>
                <Route path={'europe'} element={<CountryList continent={'europe'}/>}/>
                <Route path={'north_america'} element={<CountryList continent={'north%20america'}/>}/>
                <Route path={'oceania'} element={<CountryList continent={'oceania'}/>}/>
                <Route path={'south_america'} element={<CountryList continent={'south%20america'}/>}/>
            </Routes>

        </div>
</>
    )
}

export default CountryBox
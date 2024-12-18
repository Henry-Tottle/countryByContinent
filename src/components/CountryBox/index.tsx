import {JSX} from "react";
import CountryList from "../CountryList";
import {Routes, Route} from 'react-router-dom';

function CountryBox(): JSX.Element {



    return (
<>
        <div className='border-4 rounded-2xl grid grid-cols-3 shadow-2xl'>
            <Routes>
                <Route path={'countryByContinent/africa'} element={<CountryList continent={'africa'}/>}/>
                <Route path={'countryByContinent/asia'} element={<CountryList continent={'asia'}/>}/>
                <Route path={'countryByContinent/europe'} element={<CountryList continent={'europe'}/>}/>
                <Route path={'countryByContinent/north_america'} element={<CountryList continent={'north%20america'}/>}/>
                <Route path={'countryByContinent/oceania'} element={<CountryList continent={'oceania'}/>}/>
                <Route path={'countryByContinent/south_america'} element={<CountryList continent={'south%20america'}/>}/>
            </Routes>

        </div>
</>
    )
}

export default CountryBox
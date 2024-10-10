import {JSX} from "react";
import {Link, Route, Routes} from "react-router-dom";
import DescriptionBox from "../DescriptionBox";

function ContinentDisplay():JSX.Element  {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<DescriptionBox/>}/>
            </Routes>
        <div className='border-b-2 text-center my-5 pb-3'>
                <Link className='mx-5 hover:font-bold' to='/countryByContinent/africa'>Africa</Link>
                <Link className='mx-5 hover:font-bold' to='/countryByContinent/asia'>Asia</Link>
                <Link className='mx-5 hover:font-bold' to='/countryByContinent/europe'>Europe</Link>
                <Link className='mx-5 hover:font-bold' to='/countryByContinent/north_america'>North America</Link>
                <Link className='mx-5 hover:font-bold' to='/countryByContinent/oceania'>Oceania</Link>
                <Link className='mx-5 hover:font-bold' to='/countryByContinent/south_america'>South America</Link>
        </div>
</>
    )

}

export default ContinentDisplay
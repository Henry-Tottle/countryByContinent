import ContinentDisplay from "./components/ContinentDisplay";
import {JSX, } from "react";
import CountryBox from "./components/CountryBox";
import { BrowserRouter } from 'react-router-dom'
import ModeContext from "./ModeContext/ModeContext.tsx";

function App():JSX.Element {
  return (
    <>
        <div className='font-mono'>
            <div className='border-b-2 pb-4 text-center'>
                <h1 className='text-5xl font-extrabold'>Countries by Continent</h1>
            </div>
            <div className='grid mt-5 mx-10'>

                <BrowserRouter>
                    <ContinentDisplay />
                    <CountryBox />
                </BrowserRouter>

            </div>
        </div>
    </>
  )
}
export default App

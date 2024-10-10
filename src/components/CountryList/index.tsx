import { JSX, useState, useEffect } from "react";

interface Country {
    name: {
        common: string;
    };
    capital: string[];
    languages: Record<string, string>;
    currencies: Record<string, { name: string }>;
}

interface EachCountryProps {
    continent: string;
}

function EachCountry({ continent }: EachCountryProps): JSX.Element {
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        const fetchCountries = async (): Promise<void> => {
            const response = await fetch(
                `https://restcountries.com/v3.1/region/${continent}?fields=name,capital,languages,currencies`
            );
            const countryArray = await response.json();
            setCountries(countryArray);
        };
        fetchCountries();
    }, [continent]);

    let image = '';
    if (continent === 'north%20america') {
        image = 'northAmerica';
    } else if (continent === 'south%20america') {
        image = 'southAmerica';
    } else {
        image = continent;
    }

    return (
        <>
            <img className='pl-32' src={`images/${image}.jpeg`} alt={`${continent} image`} />
            {countries.map((country, index) => (
                <div
                    key={index}
                    className='m-1 text-center border-2 rounded-3xl shadow-2xl shadow-cyan-950 py-2 hover:bg-blue-500'
                >
                    <p className='font-black text-2xl'>{country.name.common}</p>
                    <p>Capital: {country.capital.join(', ')}</p>
                    <p>Language: {Object.values(country.languages)[0]}</p>
                    {Object.values(country.languages)[1] && (
                        <p>Other Language: {Object.values(country.languages)[1]}</p>
                    )}
                    <p>Currency: {Object.keys(country.currencies)[0]}</p>
                </div>
            ))}
        </>
    );
}

export default EachCountry;

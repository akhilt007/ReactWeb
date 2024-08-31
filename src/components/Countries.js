import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h2>Countries</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.cca3}>
            <Link to={`/countries/${country.cca3}`}>
              <img src={country.flags.svg} alt={country.name.common} width="20" />
              {country.name.common} - {country.capital}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;

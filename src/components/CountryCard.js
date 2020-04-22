import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div className="countries__card">
      <div>
        <p className="countries__card--continent">{country.continent.name}</p>
      </div>
      <div>
        <img
          src={`https://www.countryflags.io/${country.code}/shiny/64.png`}
          alt={country.name}
        />
      </div>
      <div>
        <p className="countries__card--label">{country.name}</p>
        <p className="countries__card--content">
          {country.capital ? country.capital : "No Capital"}
        </p>
      </div>
      <div>
        <p className="countries__card--label">CURRENCY</p>
        <p className="countries__card--content currency">
          {country.currency ? country.currency : "Wild West"}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;

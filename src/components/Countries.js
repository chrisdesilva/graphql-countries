import React, { useEffect, useState } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import CountryCard from "./CountryCard";

function Countries() {
  const ALL_COUNTRIES_QUERY = gql`
    query AllCountriesQuery {
      countries {
        name
        code
        capital
        emoji
        currency
        languages {
          native
        }
        continent {
          name
        }
      }
    }
  `;

  const [bottom, setBottom] = useState(10);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setBottom(bottom + 10);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [bottom]);

  const { loading, error, data } = useQuery(ALL_COUNTRIES_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data. Please try again.</p>;

  return (
    <div className="countries__container">
      {data.countries
        .map((country) => <CountryCard key={country.code} country={country} />)
        .slice(0, bottom)}
    </div>
  );
}

export default Countries;

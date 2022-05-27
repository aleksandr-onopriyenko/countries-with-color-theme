/* eslint-disable react/jsx-props-no-spreading, react/prop-types, react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Card, Controls, List } from '../components';
import { ALL_COUNTRIES } from '../config';

function HomePage({ countries, setCountries }) {
  const navigate = useNavigate();
  const [filteredCountries, setFilteredCountries] = useState(null);

  const handleSearch = (search, region) => {
    if (countries) {
      let data = [...countries];

      if (region) {
        data = data.filter((c) => c.region.includes(region));
      }

      if (search) {
        data = data.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));
      }

      setFilteredCountries(data);
    }
  };

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(
      ({ data }) => setCountries(data),
    );
  }, []);

  useEffect(() => {
    handleSearch();
  }, [countries]);

  return (
    <>
      <Controls onSearch={handleSearch} />
      {
        filteredCountries
          ? (
            <List>
              {filteredCountries.map((c) => {
                const countryInfo = {
                  img: c.flags.png,
                  name: c.name,
                  info: [
                    {
                      title: 'Population',
                      description: c.population.toLocaleString(),
                    },
                    {
                      title: 'Region',
                      description: c.region,
                    },
                    {
                      title: 'Capitajl',
                      description: c.capital,
                    },
                  ],
                };
                return <Card key={c.name} onClick={() => navigate(`/countries/${c.name}`)} {...countryInfo} />;
              })}
            </List>
          )
          : <h2 style={{ textAlign: 'center', marginTop: '5rem', fontWeight: 'var(--fw-normal)' }}>The search has not given any results... :(</h2>
      }
    </>
  );
}

export default HomePage;

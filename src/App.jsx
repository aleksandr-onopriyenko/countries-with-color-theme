/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Header, Main } from './components';
import HomePage from './pages/HomePage';
import Details from './pages/Details';

function App() {
  const [countries, setCountries] = useState();

  return (
    <div className="App">
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage countries={countries} setCountries={setCountries} />} />
          <Route path="/countries/:name" element={<Details />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;

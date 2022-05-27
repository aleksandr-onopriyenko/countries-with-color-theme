/* eslint-disable react/jsx-props-no-spreading, react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import axios from 'axios';

import { searchByCountry } from '../config';
import { Button, Info } from '../components';

function Details() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(
      ({ data }) => setCountry(data[0]),
    );
  }, [name]);
  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <BsArrowLeft />
        {' '}
        Back
      </Button>
      { country && <Info navigate={navigate} {...country} /> }
    </div>
  );
}

export default Details;

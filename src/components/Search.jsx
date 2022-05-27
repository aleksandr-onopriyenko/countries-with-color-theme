/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { IoClose, IoSearch } from 'react-icons/io5';

const InputContainer = styled.label`
  background-color: var(--color-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1.5rem;
  
  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 290px;
  }
`;

export const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country..',
})`
  width: 100%;
  margin-left: 2rem;
  border: none;
  outline: none;
  background-color: var(--color-ui-base);
  color: var(--color-text);
`;

function Search({ search, setSearch }) {
  return (
    <InputContainer>
      <IoSearch style={{ flexShrink: 0 }} />
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
      {search && <IoClose style={{ fontSize: '1.5rem', cursor: 'pointer' }} onClick={() => setSearch('')} />}
    </InputContainer>
  );
}

export default Search;

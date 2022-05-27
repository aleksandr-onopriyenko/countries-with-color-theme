import styled from 'styled-components';

import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'var(--color-ui-base)',
      borderRadius: 'var(--radius)',
      padding: '0.25rem',
      border: 'none',
      boxShadow: 'var(--shadow)',
      height: '50px',
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: 'var(--color-text)',
      backgroundColor: state.isSelected ? 'var(--color-bg)' : 'var(--color-ui-base)',
    }),
    menu: (provided) => ({
      ...provided,
      overflow: 'hidden',
      outline: 'none',
      boxShadow: 'var(--shadow)',
      borderRadius: 'var(--radius)',
    }),
    menuList: (provided) => ({
      ...provided,
      padding: 0,
      backgroundColor: 'var(--color-ui-base)',
    }),
  },
})`
  width: 200px;
  border-radius: var(--radius);
  color: var(--color-text);
  border: none;
  font-family: var(--family);
  
  & > div > div > div:not([id]) {
    color: var(--color-text);
  }
`;

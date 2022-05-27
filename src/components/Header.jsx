import React from 'react';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Container from './Container';
import { useThemeSwitch } from '../hooks/useThemeSwitcher';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--color-ui-base);
`;

const ModeSwitcher = styled.div`
  color: var(--color-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  cursor: pointer;
  text-transform: capitalize;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  text-decoration: none;
  color: var(--color-text);
`;

function Header() {
  const { theme, toggleTheme } = useThemeSwitch();

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where in the World?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            { theme === 'light'
              ? <IoMoon />
              : <IoMoonOutline />}
            {' '}
            <span style={{ marginLeft: '0.75rem' }}>
              { theme }
              {' '}
              mode
            </span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
}

export default Header;

import React from 'react';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  background: #fff;
  position: fixed;
  width: 7vw;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 0;
  border-right: 1px solid #E1E1E1;
`;

const NavBar = () => {
  return <StyledNavBar />;
};

export default NavBar;

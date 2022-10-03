import React from 'react';
import styled from 'styled-components';

import analytics from './analytics.png';
import customer from './customer.png';
import dashboard from './dashboard.png';

const StyledNavBar = styled.nav`
  background: #fff;
  position: fixed;
  width: 7vw;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 0;
  border-right: 1px solid #e1e1e1;
  padding-top: 100px;
  align-items: center;
  justify-content: center
`;

const StyledIcon = styled.a`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 16px;
  border-radius: 4px;

  &:hover, &:focus, &:active {
    background-color: #5541D7;
    color:white;
  }
`;

const StyledImg = styled.img`
  width: 30px;
  height: 30px;
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <StyledIcon href="./">
        
        <StyledImg src={dashboard} style={{ backgroundColor: 'grey' }} />
      </StyledIcon>
      <StyledIcon href="./">
        
        <StyledImg src={customer} />
      </StyledIcon>
      <StyledIcon href="./">
        
        <StyledImg src={analytics} />
      </StyledIcon>
    </StyledNavBar>
  );
};

export default NavBar;

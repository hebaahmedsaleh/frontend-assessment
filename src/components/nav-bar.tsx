import React from 'react';
import styled from 'styled-components';

import analytics from './icons/analytics.svg';
import customer from './icons/customer.png';
import dashboard from './icons/dashboard.svg';
import employee from './icons/employee.svg';
import product from './icons/product.svg';
import copoun from './icons/copoun.svg';

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
  justify-content: center;
`;

const StyledIcon = styled.a`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 16px;
  border-radius: 4px;

  @media (max-width: 768px) {
    margin: 10px;
    padding: 8px;
  }

  &.selected,
  &:hover,
  &:focus,
  &:active {
    background-color: #5541d7;
    color: white;
    fill: white;
  }
`;

const StyledImg = styled.img`
  width: 24px;
  height: 24px;
  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <StyledIcon href='./' className='selected'>
        <StyledImg src={dashboard} style={{ backgroundColor: 'grey' }} />
      </StyledIcon>
      <StyledIcon href='./'>
        <StyledImg src={customer} />
      </StyledIcon>
      <StyledIcon href='./'>
        <StyledImg src={analytics} />
      </StyledIcon>

      <StyledIcon href='./'>
        <StyledImg src={product} />
      </StyledIcon>

      <StyledIcon href='./'>
        <StyledImg src={employee} />
      </StyledIcon>

      <StyledIcon href='./'>
        <StyledImg src={copoun} />
      </StyledIcon>
    </StyledNavBar>
  );
};

export default NavBar;

import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: #fff;
  position: fixed;
  width: 100%;
  height: 80px;
  left: 0px;
  top: 0px;
  z-index: 1;
  border-bottom: 1px solid #E1E1E1;
`;

const Header = () => {
  return <StyledHeader />;
};

export default Header;

import React from 'react';
import styled from 'styled-components';

import Header from './header';
import NavBar from './nav-bar';
import SideBar from './side-bar';
import Content from './content';

import 'components/pagination.css';

const Container = styled.div`
  display: flex;
  padding: 10vw;
  background-color: #f7f7fc;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export function Task3() {
  return (
    <>
      <Header />
      <NavBar />

      <Container>
        <Content />
        <SideBar />
      </Container>
    </>
  );
}

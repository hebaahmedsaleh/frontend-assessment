import React from 'react';
import styled from 'styled-components';

import Header from './header';
import NavBar from './nav-bar';
import SideBar from './side-bar';
import Content from './content';

import 'components/pagination.css';

const Container = styled.div`
  display: flex;
  padding: 40px 32px;
  margin-left: 90px;
  margin-top: 100px;

  background-color: #f7f7fc;
  @media (max-width: 992px) {
    flex-direction: column;
    padding: 20px 16px;
    margin-left: 60px;
    margin-top: 80px;
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

import React from 'react';
import styled from 'styled-components';

import Header from 'components/header';
import NavBar from 'components/nav-bar';
import SideBar from 'components/side-bar';
import Content from 'components/content';

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

export function Task2() {
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

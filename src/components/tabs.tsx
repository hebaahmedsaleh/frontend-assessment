import React from 'react';
import styled from 'styled-components';

const StyledTab = styled.div`
  display: flex;
  color: #92929d;
  &:focus,
  &:first-child {
    border-bottom: 1px solid #5541d7;
    color: #11142d;
    margin-bottom: -1px;

    & > p {
      font-weight: bold;
    }
  }
`;

const TabsContainer = styled.div`
display: flex;
margin: 32px 54px;
justify-content: space-between;
border-bottom: 1px solid #F2F0FF;

}`;

const Tabs = () => {
  const tabsTitles = ['All', 'Food', 'Drinks', 'Snacks', 'Packages'];
  return (
    <TabsContainer>
      {tabsTitles.map((elem) => {
        return (
          <StyledTab key={elem}>
            <p style={{ padding: 10 }}>{elem} </p>
          </StyledTab>
        );
      })}
    </TabsContainer>
  );
};

export default Tabs;

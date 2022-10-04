import React from 'react';
import styled from 'styled-components';

const StyledTab = styled.div`
  display: flex;
  color: #92929d;
  &:focus,
  &:first-child {
    border-bottom: 2px solid #5541d7;
    color: #11142d;
    margin-bottom: -2px;

    & > p {
      font-weight: bold;
    }
  }
`;

const TabsContainer = styled.div`
display: flex;
margin: 32px 54px;
justify-content: space-between;
border-bottom: 2px solid #92929d;

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

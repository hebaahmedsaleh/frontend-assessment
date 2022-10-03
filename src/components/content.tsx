import React from 'react';
import styled from 'styled-components';
import { Card } from './product-card';

import data from 'products.json';
import { Product } from 'types';

const StyledMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  padding: 24px 16px;
  flex: 7;
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const MainContent = () => {
  return (
    <StyledMain>
      {data.products.map((product: Product) => {
        return <Card key={product.id} {...product} />;
      })}
      ={' '}
    </StyledMain>
  );
};

export default MainContent;

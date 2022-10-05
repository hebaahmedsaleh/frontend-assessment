import React from 'react';
import styled from 'styled-components';

import data from 'products.json';
import { Product } from 'types';

const cartItems = data.products.slice(0, 3);

const StyledCard = styled.div`
  margin-bottom: 8px;
  background-color: #fff;
  padding: 16px 24px;
  border-radius: 2px;
  cursor: pointer;

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    margin-bottom: 26px;
  }
  & div > p {
    font-weight: 700;
  }
  & div > p:last-child {
    color: #f04461;
  }
`;

const StyledListItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  & img {
    width: 64px;
    height: 64px;
    border-radius: 4px;
  }

  & > div {
    & > p {
      font-size: 16px;
      margin-bottom: 8px;
    }
    & > p:nth-of-type(2) {
      color: #42bda1;
    }
  }

  & .btn-containers {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    & .count-items {
      height: 24px;
      width: 40px;
      text-align: center;
    }
  }
`;

const StyledIncrementBtn = styled.div`
  height: 24px;
  width: 24px;
  background-color: #5541d7;
  border-radius: 4px;
  color: #fff;
  text-align: center;
`;
const Item = (item: Product) => {
  return (
    <StyledListItem>
      <div style={{ marginRight: 24, flex: 1 }}>
        <img src={item.thumbnail} alt={item.title} />
      </div>
      <div style={{ marginRight: 32, flex: 1 }}>
        <p>{item.title}</p>
        <p>${item.price}</p>
      </div>

      <div className='btn-containers'>
        <StyledIncrementBtn> + </StyledIncrementBtn>
        <div className='count-items'> 1 </div>
        <StyledIncrementBtn> - </StyledIncrementBtn>
      </div>
    </StyledListItem>
  );
};

const CartCard = () => {
  return (
    <StyledCard>
      <div>
        <p>Current Order</p>
        <p>Clear All</p>
      </div>
      <div style={{ height: 1, width: '100%', backgroundColor: '#E1E1FB', marginBottom: 24 }} />

      <ul>
        {cartItems.map((elem: Product) => (
          <Item {...elem} key={elem.id} />
        ))}
      </ul>
    </StyledCard>
  );
};

export default CartCard;

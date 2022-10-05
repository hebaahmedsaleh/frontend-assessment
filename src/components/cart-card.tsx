import React from 'react';
import styled from 'styled-components';

import data from 'products.json';
import { Product } from 'types';

import { colors } from 'components/color';

import refresh from 'components/icons/refresh.svg';

const cartItems = data.products.slice(0, 6);

const StyledCard = styled.div`
  margin-bottom: 16px;
  background-color: ${colors.white};
  padding: 34px 16px 24px;
  border-radius: 8px;
  cursor: pointer;
  align-items: center;
  max-height: 370px;
  overflow-y: scroll;

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
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
  margin-bottom: 24px;
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
  background-color: ${colors.lightText};
  border-radius: 4px;
  color: ${colors.white};
  text-align: center;
  font-weight: 700;
`;

const StyledClearAll = styled.button`
  background-color: transparent;
  padding: 11px 24px 11px 24px;
  border: 0;
  color: #f04461;
  outline: 0;
  margin-right: 8px;
`;

const Item = (item: Product) => {
  return (
    <StyledListItem>
      <div style={{ marginRight: 24 }}>
        <img src={item.thumbnail} alt={item.title} />
      </div>
      <div style={{ marginRight: 32, flex: 1 }}>
        <p>{item.title}</p>
        <p>${item.price}</p>
      </div>

      <div className='btn-containers'>
        <StyledIncrementBtn> - </StyledIncrementBtn>
        <div className='count-items'> 1 </div>
        <StyledIncrementBtn> + </StyledIncrementBtn>
      </div>
    </StyledListItem>
  );
};

const CartCard = () => {
  return (
    <StyledCard>
      <div>
        <p style={{ fontWeight: 700, display: 'flex', alignItems: 'center' }}>Current Order</p>
        <div style={{ display: 'flex' }}>
          <StyledClearAll>Clear All</StyledClearAll>
          <img src={refresh} alt='refresh-orders' />
        </div>
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

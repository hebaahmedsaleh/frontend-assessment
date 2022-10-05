import React from 'react';
import styled from 'styled-components';

import CartCard from 'components/cart-card';

import cheveron from './icons/chevron-bottom.svg';

const StyledImg = styled.img`
  width: 24px;
  height: 24px;
  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;

const StyledSideBar = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: white;
  flex: 3;
  margin-left: 3vw;
  background-color: #e2e2ea;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const StyledCard = styled.div`
  margin-bottom: 8px;
  background-color: #fff;
  padding: 16px 24px;
  border-radius: 2px;
`;
const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  width: 100%;
  height: 48px;

  /* Light/Primary Color/50% */

  background: #5541d7;
  border-radius: 8px;
  color: white;
  cursor: pointer;
`;

const StyledSecondaryButton = styled(StyledButton)`
  background: #fff;
  border-color: #5541d7;
  color: #5541d7;
  height: 40px;
  padding: 4px 8px;
  &:hover {
    background: #5541d7;
    border-color: #dbd7f4;
    color: #dbd7f4;
  }

  &:not(:first-child) {
    margin-left: 9px;
  }
`;
const StyledPrice = styled.h6`
  color: #92929D;
  font-family: Mulish;
  font-weight: bold;
  padding: 0;
  margin: 0 0 16px;
  font-size; 16px;
`;

const StyledDropDownBtn = styled(StyledSecondaryButton)`
  justify-content: space-between;
  padding: 8px 20px;

  &:not(:first-child) {
    margin-left: 0;
  }

  @media (max-width: 992px) {
    padding: 4px;
    & > p {
      font-size: 10px;
    }

    & > img {
      width: 8px;
      height: 8px;
      &:hover {
        fill: white;
      }
    }
  }
`;
const Data: { [key: string]: string } = {
  'Sub Total': '$88',
  'Tax Total': '$4',
  Discount: '20%',
};

const SideBar = () => {
  return (
    <StyledSideBar>
      <CartCard />

      <StyledCard>
        {Object.keys(Data).map((item: string) => {
          return (
            <div key={item} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <StyledPrice>{item}</StyledPrice>
              <StyledPrice style={{ color: '#11142D' }}>{Data[item]}</StyledPrice>
            </div>
          );
        })}
        <div style={{ height: 1, width: '100%', backgroundColor: '#E1E1FB', marginBottom: 24 }} />

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <StyledPrice> Total </StyledPrice>
          <StyledPrice style={{ color: '#11142D', fontSize: 24 }}> $32</StyledPrice>
        </div>
      </StyledCard>

      <StyledCard>
        <p style={{ marginBottom: 35, lineHeight: '120%' }}> Select available promo to apply </p>

        <StyledDropDownBtn>
          <p style={{ fontSize: 16 }}>20% Off Entire Order</p>
          <StyledImg src={cheveron} />
        </StyledDropDownBtn>
      </StyledCard>

      <StyledCard>
        <p style={{ marginBottom: 35, lineHeight: '120%' }}> Payment Mode </p>
        <div style={{ display: 'flex', marginBottom: 24 }}>
          <StyledSecondaryButton>Cash </StyledSecondaryButton>
          <StyledSecondaryButton>Card Now </StyledSecondaryButton>
          <StyledSecondaryButton>E-Wallet </StyledSecondaryButton>
        </div>
        <StyledButton>Pay Now </StyledButton>
      </StyledCard>
    </StyledSideBar>
  );
};

export default SideBar;

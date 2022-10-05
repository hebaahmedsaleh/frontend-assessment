import React from 'react';
import styled from 'styled-components';

import CartCard from 'components/cart-card';
import { PromoDiscountCard } from './promo-discount-card';

import { colors } from 'components/color';

const StyledSideBar = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: white;
  flex: 3;
  margin-left: 3vw;
  background-color: #f7f7fc;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const StyledCard = styled.div`
  margin-bottom: 16px;
  background-color: ${colors.white};
  padding: 16px 24px;
  border-radius: 8px;
  cursor: pointer;
  align-items: center;
`;
export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  width: 100%;
  height: 48px;
  background: ${colors.lightText};
  border-radius: 8px;
  color: white;
  cursor: pointer;
`;

export const StyledSecondaryButton = styled(StyledButton)`
  background: ${colors.white};
  border-color: ${colors.lightText};
  color: ${colors.lightText};
  height: 40px;
  padding: 4px 8px;
  &:hover {
    background: ${colors.lightText};
    border-color: ${colors.lightGrey};
    color: ${colors.lightGrey};
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

const Data: { [key: string]: string } = {
  'Sub Total': '$88',
  'Tax Total': '$4',
  Discount: '20%',
};

const SideBar = () => {
  return (
    <StyledSideBar>
      <CartCard />

      <PromoDiscountCard />

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

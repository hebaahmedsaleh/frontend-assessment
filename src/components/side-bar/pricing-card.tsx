import React from 'react';
import styled from 'styled-components';

import { colors } from 'components/color';

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
  }
  & div > p {
    font-weight: 700;
  }
`;

const StyledPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const StyledPrice = styled.h6`
  &.title {
    color: ${colors.greyText};
  }
  font-size: 16px;
  font-weight: bold;
  padding: 0;
`;

const Data: { [key: string]: string } = {
  'Sub Total': '$88',
  'Tax Total': '$4',
  Discount: '20%',
};

const PricingCard = () => {
  return (
    <StyledCard>
      {Object.keys(Data).map((item: string) => {
        return (
          <StyledPriceContainer key={item}>
            <StyledPrice className='title'>{item}</StyledPrice>
            <StyledPrice>{Data[item]}</StyledPrice>
          </StyledPriceContainer>
        );
      })}
      <div
        style={{
          height: 1,
          width: '100%',
          backgroundColor: colors.separatorGrey,
          marginBottom: 24,
        }}
      />

      <StyledPriceContainer>
        <StyledPrice> Total </StyledPrice>
        <StyledPrice style={{ fontSize: 24 }}> $32</StyledPrice>
      </StyledPriceContainer>
    </StyledCard>
  );
};

export default PricingCard;

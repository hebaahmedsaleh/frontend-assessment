import { StyledCard } from 'components/side-bar';
import styled from 'styled-components';

import cheveron from 'components/icons/chevron-bottom.svg';

import { colors } from 'components/color';

const StyledImg = styled.img`
  width: 24px;
  height: 24px;
  @media (max-width: 992px) {
    width: 12px;
    height: 12px;
  }
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

const StyledSecondaryButton = styled(StyledButton)`
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

const StyledDropDownBtn = styled(StyledSecondaryButton)`
  justify-content: space-between;
  padding: 8px 24px;

  &:not(:first-child) {
    margin-left: 0;
  }

  &:hover {
    & > p {
      color: ${colors.white};
    }
    & > img {
      fill: ${colors.white};
    }
  }

  & > p {
    color: ${colors.lightText};
  }

  @media (max-width: 992px) {
    padding: 4px;
    & > p {
      font-size: 10px;
    }

    & > img {
      width: 8px;
      height: 8px;
    }
  }
`;

export const PromoDiscountCard = () => {
  return (
    <StyledCard>
      <p style={{ marginBottom: 24 }}> Select available promo to apply </p>

      <StyledDropDownBtn>
        <p>20% Off Entire Order</p>
        <StyledImg src={cheveron} />
      </StyledDropDownBtn>
    </StyledCard>
  );
};

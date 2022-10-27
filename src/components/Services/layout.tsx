import styled from 'styled-components';

const
  polygon_svg = '/images/polygon.svg',
  polygon_hover_svg = '/images/polygon_hover.svg';

export const Container = styled.article`
  margin-top: 80px;
  margin-bottom: 80px;
  display: grid;
  grid-template-columns: 700px 1fr;
  grid-template-rows: auto auto;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    grid-template-columns: 520px 1fr;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  height: 56px;
  color: #FFFFFF;
  grid-column: 1 / 3;
  grid-row: 1;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 36px;
    line-height: 42px;
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 30px;
    height: 30px;
  }
`;

export const Menu = styled.div`
  margin-top: 40px;
  grid-column: 1;
  grid-row: 2;
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.div`
  width: fit-content;

  &:not(:first-child) {
    margin-top: 40px;

    @media screen and (max-width: 767px) {
      margin-top: 20px;
    }
  }
`;

export const MenuItemTitle = styled.div<{active: boolean}>`
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  height: 20px;
  color: ${({active}) => active ? '#FFFFFF' : '#3162AC'};
  background-image: url(${({active}) => active ? polygon_svg : polygon_hover_svg});
  background-position: top left;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  cursor: pointer;
  padding-left: 40px;

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const MenuItemContent = styled.div`
  display: none;
  margin-top: 20px;
  margin-left: 40px;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    display: block;
  }

  @media screen and (max-width: 767px) {
    display: block;
    margin-top: 10px;
    margin-left: 0;
  }
`;

export const ContentContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  grid-column: 2;
  grid-row: 2;
  align-self: start;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-left: 1px solid #C4C4C4;

  @media screen and (max-width: 1199px) {
    display: none;
  }
`;

export const ContentTitle = styled.div`
  margin-left: 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #FFFFFF;
`;

export const Content = styled.div`
  margin: 20px 0 0 20px;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
`;

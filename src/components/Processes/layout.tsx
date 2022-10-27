import styled from 'styled-components';

const
  arrow_svg = '/images/arrow.svg',
  gap_down_svg = '/images/gap_down.svg';

export const Container = styled.div`
  margin: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    margin: 80px 0px 140px 0px;
  }

  @media screen and (max-width: 767px) {
    margin: 40px 0;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  color: #FFFFFF;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 36px;
    line-height: 42px;
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

export const Content = styled.div`
  margin-top: -25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 10px;
    flex-direction: column;
    justify-content: start;
  }

  @media screen and (max-width: 767px) {
    margin-top: 10px;
    flex-direction: column;
    justify-content: start;
  }
`;

export const Block = styled.div`
  margin-top: 65px;
  width: 340px;
  height: 181px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    width: 210px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 520px;
    margin-top: 10px;
    height: auto;
  }

  @media screen and (max-width: 767px) {
    width: 280px;
    margin-top: 10px;
    height: auto;
  }
`;

export const BlockIdx = styled.div`
  font-weight: 300;
  font-size: 48px;
  line-height: 56px;
  color: #FFFFFF;

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

export const BlockTitle = styled.div`
  margin-top: 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #FFFFFF;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 10px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 10px;
    font-size: 14px;
  }
`;

export const BlockText = styled.div`
  margin-top: 10px;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #A5B0B9;
  text-align: center;
  padding: 0 12px;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    padding: 0;
  }

  @media screen and (max-width: 767px) {
    padding: 0;
  }
`;

export const Gap = styled.div<{wrap: boolean}>`
  margin-top: 65px;
  width: 10px;
  height: 181px;
  background-image: url(${arrow_svg});
  background-position: center;
  background-repeat: no-repeat;
  display: ${({wrap}) => wrap ? 'none' : 'block'};

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    margin-right: 25px;
    margin-left: 25px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 10px;
    width: 160px;
    height: 10px;
    background-image: url(${gap_down_svg});
    display: block;
  }

  @media screen and (max-width: 767px) {
    margin-top: 10px;
    width: 160px;
    height: 10px;
    background-image: url(${gap_down_svg});
    display: block;
  }
`;

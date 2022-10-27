import styled from 'styled-components';
import {Swiper} from 'swiper/react';

import {Button} from 'components/Forms';

const
  quotes_svg = '/images/quotes.svg',
  polygon_svg = '/images/projects_polygon.svg';

export const Container = styled.article`
  margin-top: 80px;
  margin-bottom: 160px;
  display: block;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-bottom: 170px;
  }

  @media screen and (max-width: 767px) {
    margin: 40px 0;
  }
`;

const SubTitle = styled.h3`
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #FFFFFF;

  @media screen and (min-width: 1199px) and (max-width: 1800px) {
    font-size: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 16px;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const SubTitleOne = styled(SubTitle)`
  margin-top: 130px;

  @media screen and (min-width: 1199px) and (max-width: 1800px) {
    margin-top: 70px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 70px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 40px;
    max-width: 220px;
  }
`;

export const SubTitleTwo = styled(SubTitle)`
  line-height: 14px;

  @media screen and (min-width: 1199px) and (max-width: 1800px) {
    line-height: 10px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 20px;
    line-height: 10px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 20px;
    max-width: 280px;
    line-height: 20px;
  }
`;

export const SubTitleThree = styled(SubTitle)`
  line-height: 14px;

  @media screen and (min-width: 1199px) and (max-width: 1800px) {
    line-height: 10px;
  }

  @media screen and (max-width: 767px) {
    max-width: 280px;
    margin-top: -10px;
    line-height: 20px;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 96px;
  line-height: 112px;
  color: #FFFFFF;
  max-width: 1260px;

  @media screen and (min-width: 1199px) and (max-width: 1800px) {
    font-size: 64px;
    line-height: 74px;
    max-width: 860px;
    margin-top: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 64px;
    line-height: 74px;
    max-width: 840px;
    margin-top: 20px;
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 21px;
    max-width: 240px;
    margin-top: 10px;
  }
`;

export const ProjectBtn = styled(Button)`
  width: 145px;
  margin-top: 70px;

  @media screen and (min-width: 1199px) and (max-width: 1800px) {
    margin-top: 40px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 40px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 30px;
  }
`;

export const Quote = styled.div`
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #A5B0B9;
  margin-top: 80px;
  max-width: 1140px;
  background-image: url(${quotes_svg});
  background-position: top left;
  background-size: 54px 40px;
  background-repeat: no-repeat;
  padding-left: 74px;

  @media screen and (min-width: 1199px) and (max-width: 1800px) {
    margin-top: 62px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 40px;
    background-size: 20px 15px;
    padding-left: 32px;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
    margin-top: 30px;
    background-size: 20px 15px;
    padding-left: 32px;
  }
`;

const Header = styled.h2`
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  color: #FFFFFF;

  @media screen and (min-width: 1199px) and (max-width: 1800px) {
    font-size: 36px;
    line-height: 42px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 36px;
    line-height: 42px;
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

export const HeaderOne = styled(Header)`
  margin-top: 80px;

  @media screen and (min-width: 1199px) and (max-width: 1800px) {
    margin-top: 40px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 40px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const HeaderTwo = styled(Header)`
  margin-top: 80px;

  @media screen and (min-width: 1199px) and (max-width: 1800px) {
    margin-top: 40px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 40px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const HeaderThree = styled(Header)`
  margin-top: 80px;

  @media screen and (min-width: 1199px) and (max-width: 1800px) {
    margin-top: 40px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 40px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  @media screen and (min-width: 1199px) and (max-width: 1800px) {
    margin-top: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 20px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const TaskListItem = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  height: 20px;
  color: #FFFFFF;
  background-image: url(${polygon_svg});
  background-position: top left;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  padding-left: 36px;

  &:not(:first-child) {
    margin-top: 22px;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
    height: auto;

    &:not(:first-child) {
      margin-top: 10px;
    }
  }
`;

export const Techs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

export const TechItem = styled.div`
  height: 34px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  border-radius: 4px;
  padding-left: 14px;
  padding-right: 14px;
  font-weight: 500;
  font-size: 12px;
  line-height: 34px;
  color: #FFFFFF;
  text-transform: uppercase;
  background-color: transparent;
`;

export const AdvantagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1180px;

  @media screen and (min-width: 1199px) and (max-width: 1800px) {
    max-width: 1060px;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const AdvantageBlock = styled.div`
  flex: 0 0 20%;

  @media screen and (min-width: 1199px) and (max-width: 1800px) {
    flex: 0 0 33.3%;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    flex: 0 0 50%;
  }

  @media screen and (max-width: 767px) {
    flex: 0 0 100%;
  }
`;

export const AdvantageIcon = styled.div<{iconUrl: string}>`
  background-image: url(${(props) => props.iconUrl});
  background-position: center;
  background-size: 80px 80px;
  background-repeat: no-repeat;
  width: 220px;
  height: 120px;

  @media screen and (min-width: 1199px) and (max-width: 1800px) {
    width: 340px;
    height: 120px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 340px;
    height: 140px;
  }

  @media screen and (max-width: 767px) {
    width: auto;
  }
`;

export const AdvantageText = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #FFFFFF;
  text-align: center;
  width: 220px;

  @media screen and (min-width: 1199px) and (max-width: 1800px) {
    width: 340px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 340px;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 20px;
    width: auto;
    padding: 10px 34px 36px 34px;
  }
`;

export const AdvantagesSwiper = styled(Swiper)`
  width: 100vw;
  margin: 0px -20px 0px -20px;
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
  }
`;

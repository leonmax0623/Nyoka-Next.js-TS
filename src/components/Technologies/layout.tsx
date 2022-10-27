import styled from 'styled-components';
import {Swiper} from 'swiper/react';

const arrow_right_svg = '/images/arrow_right.svg';

export const Container = styled.div`
  margin: 80px 0;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    margin: 40px 0;
    position: relative;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  height: 56px;
  color: #FFFFFF;

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 21px;
    height: 21px;
  }
`;

export const Techs = styled.div<{ref: any}>`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media screen and (max-width: 767px) {
    gap: 0;
    margin: 20px -20px 0 -20px;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    padding-right: 20px;
    padding-left: 10px;
  }
`;

export const Item = styled.div<{active: boolean}>`
  height: 34px;
  border: ${({active}) => active ? '1px solid rgba(255, 255, 255, 0)' : '1px solid rgba(255, 255, 255, 0.6)'};
  box-sizing: border-box;
  border-radius: 4px;
  padding-left: 14px;
  padding-right: 14px;
  font-weight: 500;
  font-size: 12px;
  line-height: 34px;
  color: #FFFFFF;
  text-transform: uppercase;
  background-color: ${({active}) => active ? '#30C69D' : 'transparent'};
  cursor: pointer;

  @media screen and (max-width: 767px) {
    flex-shrink: 0;

    &:not(:first-child) {
      margin-left: 10px;
    }

    &:first-child {
      margin-left: 20px;
    }

    &:last-child {
      margin-right: 20px;
    }
  }
`;

Item.defaultProps = {
  active: false
};

export const ArrowRightBack = styled.div<{active: boolean}>`
  width: 69px;
  height: 36px;
  background: linear-gradient(270deg, #1B1C2E 41.51%, rgba(27, 28, 46, 0) 96.03%);
  position: absolute;
  top: 40px;
  right: -20px;
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    visibility: ${({active}) => active ? 'visible' : 'hidden'};
    opacity: ${({active}) => active ? '1' : '0'};
    transition: opacity 400ms;
  }
`;

export const ArrowRight = styled.img`
  width: 7px;
  height: 14px;
  position: absolute;
  top: 10px;
  right: 20px;
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
  }
`;

ArrowRight.defaultProps = {
  src: arrow_right_svg
};

export const ArrowLeftBack = styled(ArrowRightBack)`
  transform: rotate(180deg);
  left: -20px;
`;

export const ArrowLeft = styled(ArrowRight)`
  left: 42px;
`;

export const Details = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 90px 1fr;
  grid-template-rows: auto auto auto;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  width: 70px;
  height: 80px;
  background-image: url(${props => props.defaultValue});
  background-position: left center;
  background-size: contain;
  background-repeat: no-repeat;
  grid-row: 1 / 4;
  grid-column: 1;
`;

export const TechTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #FFFFFF;
  grid-row: 1;
  grid-column: 2;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
    font-size: 14px;
  }
`;

export const TechText = styled.div`
  margin-top: 10px;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  grid-row: 2;
  grid-column: 2;
  width: 850px;
  justify-self: start;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: auto;
  }

  @media screen and (max-width: 767px) {
    width: auto;
  }
`;

export const SubTitle = styled.div`
  margin-top: 50px;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #FFFFFF;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
    font-size: 14px;
  }
`;

export const Projects = styled.div`
  margin-top: 20px;
  display: flex;
  column-gap: 30px;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 220px;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    width: 260px;
  }

  @media screen and (max-width: 767px) {
    width: auto;
    align-items: center;
  }
`;

export const ProjectImgContainer = styled.a`
  width: 220px;
  height: 220px;
  background: rgba(30, 31, 49, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    background: linear-gradient(0deg, rgba(48, 198, 157, 0.2), rgba(48, 198, 157, 0.2)), rgba(30, 31, 49, 0.6);
  }

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    width: 260px;
    height: 260px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 220px;
    height: 220px;
  }

  @media screen and (max-width: 767px) {
    width: 278px;
    height: 278px;
  }
`;

export const ProjectText = styled.div`
  margin-top: 12px;
  margin-bottom: 40px;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #A5B0B9;

  @media screen and (max-width: 767px) {
    width: 280px;
  }
`;

export const ProjectsSwiper = styled(Swiper)`
  width: 100vw;
  margin: 20px -20px 0 -20px;
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
  }
`;

const ProjectButton = styled.div`
  height: 40px;
  background: linear-gradient(270deg, #5694F2 0%, #18C9A1 100%);
  box-shadow: 0px 10px 20px -8px rgba(64, 184, 214, 0.3);
  border-radius: 20px;
  font-weight: 500;
  font-size: 12px;
  line-height: 40px;
  text-align: center;
  color: #FFFFFF;
  text-shadow: 0px 1px 0px rgba(27, 28, 46, 0.2);
  text-transform: uppercase;
  cursor: pointer;
  width: 145px;

  &:hover {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(270deg, #5694F2 0%, #18C9A1 100%);
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const NoProjectsButton = styled(ProjectButton)`
  margin-top: 50px;
`;

export const StartProjectButton = styled(ProjectButton)`
  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
`;

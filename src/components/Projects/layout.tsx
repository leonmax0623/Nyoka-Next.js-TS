import styled from 'styled-components';
import {Swiper} from 'swiper/react';

export const Container = styled.article`
  margin-top: 80px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    margin: 40px 0;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  height: 56px;
  color: #FFFFFF;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 36px;
    line-height: 42px;
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 21px;
    height: 21px;
  }
`;

export const ProjectsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  column-gap: 20px;
  row-gap: 40px;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 340px;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    width: 250px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 220px;
  }

  @media screen and (max-width: 767px) {
    width: auto;
    align-items: center;
  }
`;

export const ProjectImgContainer = styled.a`
  width: 340px;
  height: 340px;
  background: rgba(30, 31, 49, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    background: linear-gradient(0deg, rgba(48, 198, 157, 0.2), rgba(48, 198, 157, 0.2)), rgba(30, 31, 49, 0.6);
  }

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    width: 250px;
    height: 250px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 220px;
    height: 220px;
  }

  @media screen and (max-width: 767px) {
    width: 280px;
    height: 280px;
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

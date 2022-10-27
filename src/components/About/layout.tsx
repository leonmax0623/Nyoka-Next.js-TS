import styled from 'styled-components';

const
  projects_polygon_svg = '/images/projects_polygon.svg';

export const Container = styled.article`
  margin-top: 92px;
  margin-bottom: 80px;
  width: 940px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    width: 700px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 700px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 40px;
    margin-bottom: 50px;
    width: 100%;
  }
`;

export const Title = styled.div`
  height: 56px;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  color: #FFFFFF;
  margin: 0;
  white-space: nowrap;
  margin-bottom: 20px;

  @media screen and (min-width: 1199px) and (max-width: 1800px) {
    font-size: 42px;
    height: 48px;
    line-height: 48px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 34px;
    height: 40px;
    line-height: 40px;
  }

  @media screen and (max-width: 767px) {
    font-size: 16px;
    height: 18px;
    line-height: 18px;
  }
`;

export const Banner = styled.div`
  width: 888px;
  margin-top: 30px;
  margin-bottom: 40px;
  padding: 24px;
  background: rgba(30, 31, 49, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    width: 650px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: calc(100% - 40px);
  }

  @media screen and (max-width: 767px) {
    width: calc(100% - 40px);
    padding: 16px;
  }
`;

export const BannerSubText = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #FFFFFF;

  &:first-child {
    margin-bottom: 6px;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const Text = styled.div`
  margin-top: 12px;
  margin-bottom: 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
`;

export const SubTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #FFFFFF;
  margin-top: 30px;

  @media screen and (max-width: 767px) {
    margin-top: 0px;
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  margin-top: 40px;
  margin-bottom: 30px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 0px;
  }
`;

export const Block = styled.div`
  width: 230px;
  height: 130px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    width: 230px;
    height: 130px;
    align-items: center;
    text-align: center;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 220px;
    height: 130px;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 767px) {
    width: calc(100% - 60px);
    height: 140px;
    align-items: center;
    text-align: center;
  }
`;

export const BlockCounter = styled.div`
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  color: #30C69D;
`;

export const BlockText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  margin-top: 10px;
`;

export const ImageContainer = styled.div`
  margin-top: 40px;
  user-select: none;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const ProjectsList = styled.div`
  display: none;
  margin-top: 12px;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ProjectsListItem = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  flex: 1 1 80px;
  height: 20px;
  color: #FFFFFF;
  background-image: url(${projects_polygon_svg});
  background-position: top left;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  padding-left: 36px;
  margin-top: 12px;
`;

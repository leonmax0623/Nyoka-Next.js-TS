import styled from 'styled-components';

import {
  Brand as BrandBase,
  Close as CloseBase
} from 'components/Icons';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: calc(710px + (100vw - 1435px) / 2);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  background: transparent;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    width: calc(710px + (100vw - 1075px) / 2);
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 100vw;
    border-left: none;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 767px) {
    width: 100vw;
    border-left: none;
    display: flex;
    justify-content: center;
  }
`;

export const InnerContainer = styled.div`
  margin-left: 40px;
  width: 670px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  min-height: 100vh;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 100%;
    margin: 0 34px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 0 20px;
  }
`;

export const Back = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: calc(710px + (100vw - 1435px) / 2);
  opacity: 0.8;
  background: linear-gradient(90deg, rgba(45, 85, 74, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #1B1C2E;
  box-shadow: -40px 0px 40px rgba(20, 21, 36, 0.4);

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    width: calc(710px + (100vw - 1075px) / 2);
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 100vw;
  }

  @media screen and (max-width: 767px) {
    width: 100vw;
  }
`;

export const HeaderControls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 54px;
  margin-left: auto;

  @media screen and (max-width: 767px) {
    margin-top: 34px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: stretch;
`;

export const Brand = styled(BrandBase)`
  margin-top: 40px;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const CloseBtn = styled(CloseBase)``;

export const Navigation = styled.nav`
  margin-top: 80px;
  flex: 1 0;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    margin-top: 40px;
  }
`;

export const NavItem = styled.a`
  height: 40px;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  color: #6C8E98;
  text-decoration: none;
  cursor: pointer;
  width: fit-content;

  &:not(:first-child) {
    margin-top: 28px;
  }

  &:hover {
    color: #FFFFFF;
    transition: color ease-out 0.2s;
  }

  &.active {
    position: relative;
    color: #30C69D;

    &::after {
      content: " ";
      width: 2px;
      height: 40px;
      background-color: #30C69D;
      border-radius: 1px;
      position: absolute;
      left: -40px;
      bottom: 0;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 100%;
    text-align: center;

    &.active {
      color: #30C69D;
      border-right: 2px solid #30C69D;
      border-left: 2px solid #30C69D;

      &:after {
        content: none;
      }
    }
  }

  @media screen and (max-width: 767px) {
    height: 20px;
    font-size: 14px;
    width: 100%;
    text-align: center;

    &:not(:first-child) {
      margin-top: 32px;
    }

    &.active {
      color: #30C69D;
      border-right: 2px solid #30C69D;
      border-left: 2px solid #30C69D;

      &:after {
        content: none;
      }
    }
  }
`;

export const Links = styled.div`
  display: flex;
  margin-top: 40px;

  & > a:not(:first-child) {
    margin-left: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    justify-content: center;
  }

  @media screen and (max-width: 767px) {
    margin-left: 0;
    justify-content: center;
  }
`;

const text = `
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6C8E98;
  height: 20px;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    text-align: center;
  }
`;

export const Privacy = styled.a`
  ${text}
  margin-top: 40px;
  cursor: pointer;
  width: fit-content;

  &:hover {
    color: #FFFFFF;
    transition: color ease-out 0.2s;
  }

  @media screen and (max-width: 767px) {
    margin-top: 20px;
    text-align: center;
    width: auto;
  }
`;

export const Copyright = styled.div`
  ${text}
  margin-top: 20px;
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
    text-align: center;
  }
`;

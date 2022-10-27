import styled from 'styled-components';

import {
  Brand as BrandBase,
  SideBtn as SideBtnBase
} from 'components/Icons';
import {Button} from 'components/Forms';

export const Container = styled.header`
  height: 154px;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 767px) {
    height: 65px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: stretch;
`;

export const Brand = styled(BrandBase)`
  margin-top: 40px;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const NavItems = styled.div`
  margin-top: 44px;
  display: flex;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavItem = styled.a`
  height: 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #6C8E98;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 40px;
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
      width: 40px;
      height: 2px;
      background-color: #30C69D;
      border-radius: 1px;
      position: absolute;
      left: 0;
      bottom: -10px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    display: block;
    margin-left: 0;
  }
`;

export const SideMenu = styled.div`
  margin-top: 56px;
  display: flex;
  margin-left: auto;

  @media screen and (max-width: 767px) {
    margin-top: 35px;
  }
`;

export const ProjectBtn = styled(Button)`
  width: 145px;
  margin-top: -8px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const SideBtn = styled(SideBtnBase)`
  margin-left: 32px;
`;

export const SideBack = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background: rgba(20, 21, 36, 0.6);
  border: 1px solid #000000;
  backdrop-filter: blur(10px);
`;

export const Phone = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: #FFFFFF;
  text-decoration: none;
  margin-left: 32px;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

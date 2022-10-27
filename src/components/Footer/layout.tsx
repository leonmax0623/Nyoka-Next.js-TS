import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: stretch;
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    justify-content: start;
    align-items: center;
  }
`;

const text = `
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6C8E98;
  height: 20px;
`;

export const Copyright = styled.div`
  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }

  ${text}
`;

export const Privacy = styled.a`
  cursor: pointer;
  margin-left: 40px;
  text-decoration: none;

  &:hover {
    color: #FFFFFF;
    transition: color ease-out 0.2s;
  }

  @media screen and (max-width: 767px) {
    flex: 1 0;
    margin-left: 0px;
    margin-top: 20px;
  }

  ${text}
`;

export const Links = styled.div`
  display: flex;
  margin-left: auto;

  @media screen and (max-width: 767px) {
    margin-left: unset;
  }

  & > a:not(:first-child) {
    margin-left: 20px;
  }
`;

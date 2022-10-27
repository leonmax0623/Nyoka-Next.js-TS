import styled from 'styled-components';

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

export const Text = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #A5B0B9;
  margin-top: 10px;
`;

export const Details = styled(Text)`
  font-weight: 400;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const ItemTitle = styled.div`
  margin: 40px 0 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #FFFFFF;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 20px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 20px;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const SubTitle = styled.div`
  margin-top: 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #A5B0B9;

  @media screen and (max-width: 767px) {
    margin-top: 16px;
  }
`;

export const Dot = styled(Text)`
  display: inline-block;
  margin-left: 8px;
  margin-right: 8px;
`;

export const SubText = styled(Text)`
  margin-left: 26px;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-bottom: 0;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 0;
    margin-left: 22px;
  }
`;

export const Email = styled.a`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #30C69D;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

import styled from 'styled-components';

const
  back_svg = '/images/back.svg';

export const Container = styled.div`
  margin: 40px 0 80px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

export const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
`;

export const BackArrow = styled.img`
  width: 11px;
  height: 20px;
`;

BackArrow.defaultProps = {
  src: back_svg
};

export const BackText = styled.div`
  margin-left: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
`;

export const Title = styled.div`
  margin-top: 20px;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  color: #FFFFFF;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 22px;
    line-height: 30px;
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

export const Subtitle = styled.div`
  margin-top: 40px;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #FFFFFF;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
    font-size: 14px;
  }
`;

export const Description = styled.div`
  margin-top: 20px;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;

  @media screen and (max-width: 767px) {
    margin-top: 10px;
  }
`;

export const ImageContainer = styled.div`
  user-select: none;
  margin-top: 20px;
  margin-bottom: 8px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const ImageContainerMobile = styled.div`
  user-select: none;
  margin-top: 20px;
  margin-bottom: 8px;
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
  }
`;

export const TechsTitle = styled.div`
  margin-top: 40px;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #FFFFFF;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
    font-size: 14px;
  }
`;

export const Techs = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;
`;

export const Tech = styled.div`
  height: 34px;
  padding: 0 14px;
  font-weight: 500;
  font-size: 12px;
  line-height: 34px;
  text-transform: uppercase;
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  border-radius: 4px;
`;

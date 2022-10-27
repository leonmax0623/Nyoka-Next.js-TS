import styled from 'styled-components';

const backgroundImageURL = '/images/background.jpg';

export const BackgroundContainer = styled.div`
  background-image: url(${backgroundImageURL});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  background: rgba(27, 28, 46, 0.8);
  backdrop-filter: blur(14px);

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    justify-content: stretch;
  }
`;

export const InnerContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 1420px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    width: 1060px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 100%;
    margin: 0 35px;
  }

  @media screen and (max-width: 767px) {
    width: calc(100% - 40px);
    margin: 0 20px;
  }
`;

export const Content = styled.main`
  flex: 1 0;
`;

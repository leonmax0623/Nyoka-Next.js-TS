import styled from 'styled-components';

const
  close_svg = '/images/close.svg';

export const Back = styled.div`
  background: rgba(15, 16, 28, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  justify-content: center;

  @media screen and (max-width: 767px) {
    overflow: auto;
  }
`;

export const Body = styled.div`
  background: #1B1C2E;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr;
`;

export const Close = styled.img`
  width: 12px;
  height: 12px;
  object-fit: contain;
  object-position: center center;
  margin: 20px 20px 0 0;
  grid-row: 1;
  grid-column: 1;
  justify-self: end;
  align-self: start;
  cursor: pointer;
`;

Close.defaultProps = {
  src: close_svg
};

export const Container = styled.div`
  margin: 40px;
  grid-row: 1;
  grid-column: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media screen and (max-width: 767px) {
    margin: 20px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
`;

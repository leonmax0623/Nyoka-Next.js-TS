import styled from 'styled-components';

import {
  Button,
  Button2,
  Button3,
  Msg
} from 'components/Forms';

interface Icons {
  [key: string]: string;
}

const
  order_close_svg = '/images/close.svg',
  order_success_svg = '/images/order/success.svg',
  order_icons: Icons = {
    asap: '/images/order/asap.svg',
    blockchain: '/images/order/blockchain.svg',
    consult: '/images/order/consult.svg',
    crm: '/images/order/crm.svg',
    current: '/images/order/current.svg',
    ds: '/images/order/ds.svg',
    ml: '/images/order/ml.svg',
    mobile: '/images/order/mobile.svg',
    month: '/images/order/month.svg',
    new: '/images/order/new.svg',
    service: '/images/order/service.svg',
    slow: '/images/order/slow.svg'
  };

export const Back = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background: rgba(20, 21, 36, 0.6);
  backdrop-filter: blur(10px);
  overflow: auto;
`;

export const BodyBack = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 950px;
  height: 100vh;
  background: linear-gradient(90deg, rgba(45, 85, 74, 0.1) 0%, rgba(0, 0, 0, 0.2) 100%), #1B1C2E;
  opacity: 0.8;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    width: 710px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    left: 0;
    width: auto;
  }

  @media screen and (max-width: 767px) {
    left: 0;
    width: auto;
    height: auto;
  }
`;

export const Body = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 950px;
  height: 100vh;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  background: transparent;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    width: 710px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    left: 0;
    width: auto;
  }

  @media screen and (max-width: 767px) {
    left: 0;
    width: auto;
    height: auto;
  }
`;

export const Container = styled.div`
  margin: 40px;
  flex: 1 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  align-content: start;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin: 40px 34px;
  }

  @media screen and (max-width: 767px) {
    margin: 20px;
  }
`;

export const Close = styled.div`
  width: 12px;
  height: 12px;
  grid-row: 1;
  grid-column: 1;
  justify-self: end;
  align-self: start;
  background-image: url(${order_close_svg});
  background-position: center;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const Title = styled.div`
  grid-row: 1;
  grid-column: 1;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  color: #FFFFFF;

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

export const Step = styled.div`
  grid-column: 1;
  grid-row: 2;
  margin-top: 20px;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #FFFFFF;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Content = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const Selector = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 20px;

  @media screen and (max-width: 767px) {
    column-gap: 20px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ItemTitleProps {
  active: boolean;
}

export const ItemTitle = styled.div<ItemTitleProps>`
  margin-top: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${({active}) => active ? '#30C69D' : '#FFFFFF'};
  cursor: pointer;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;

interface BoxProps {
  active: boolean;
}

const box_style = ({active}: BoxProps) => active ? `
  background: rgba(48, 198, 157, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
` : `
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Box = styled.div<BoxProps>`
  width: 220px;
  height: 220px;
  border-radius: 4px;
  box-sizing: border-box;
  ${box_style}
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    width: 160px;
    height: 160px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 160px;
    height: 160px;
  }

  @media screen and (max-width: 767px) {
    width: 130px;
    height: 130px;
  }
`;

interface IconProps {
  icon: string;
  active: boolean;
}

const icon_style = ({active, icon}: IconProps) => active ? `
  background: #30C69D;
  mask: url(${order_icons[icon]});
` : `
  background: #FFFFFF;
  mask: url(${order_icons[icon]});
`;

export const Icon = styled.div<IconProps>`
  width: 110px;
  height: 110px;
  ${icon_style}
  mask-size: 110px 110px;
  mask-repeat: no-repeat;
  mask-position: center;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    width: 80px;
    height: 80px;
    mask-size: 80px 80px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 80px;
    height: 80px;
    mask-size: 80px 80px;
  }

  @media screen and (max-width: 767px) {
    width: 65px;
    height: 65px;
    mask-size: 65px 65px;
  }
`;

export const Buttons = styled.div`
  margin-top: 40px;
  display: flex;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
    margin-bottom: 20px;
    flex-direction: column;
  }
`;

export const Next = styled(Button)`
  width: 220px;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    width: 160px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 160px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const Cancel = styled(Button3)`
  width: 220px;
  margin-left: 40px;
  cursor: pointer;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    width: 160px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 160px;
  }

  @media screen and (max-width: 767px) {
    margin-left: 0;
    margin-top: 20px;
    width: 100%;
  }
`;

export const Description = styled(Msg)`
  width: 540px;
  height: 160px;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    width: 390px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const SuccContainer = styled.div`
  width: 100%;
  margin: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;

  @media screen and (max-width: 767px) {
    margin: 20px;
  }
`;

export const Success = styled.div`
  grid-row: 1;
  grid-column: 1;
  justify-self: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SuccIcon = styled.div`
  width: 136px;
  height: 96px;
  background-image: url(${order_success_svg});
  background-position: center;
  background-size: 136px 96px;
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) {
    width: 80px;
    height: 56px;
    background-size: contain;
  }
`;

export const SuccText = styled.div`
  margin-top: 40px;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #30C69D;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 16px;
    margin-top: 20px;
  }
`;

export const SuccOk = styled(Button2)`
  width: 280px;
  display: none;
  margin-top: 40px;

  @media screen and (max-width: 767px) {
    display: block;
  }
`;

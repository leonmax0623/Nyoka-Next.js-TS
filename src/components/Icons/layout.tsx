import styled from 'styled-components';

const
  telegram_svg = '/images/icons/telegram.svg',
  whatsapp_svg = '/images/icons/whatsapp.svg',
  skype_svg = '/images/icons/skype.svg',
  nyoka_lg_svg = '/images/icons/nyoka_lg.svg',
  nyoka_sm_svg = '/images/icons/nyoka_sm.svg',
  side_btn_svg = '/images/side_btn.svg',
  close_btn_svg = '/images/close.svg';

const Link = styled.a`
  width: 20px;
  height: 20px;
  background: #6C8E98;

  &:hover {
    background: #FFFFFF;
    transition: background ease-out 0.2s;
  }
`;

export const TelegramLink = styled(Link)`
  mask: url(${telegram_svg}) center center / 20px 20px no-repeat;
`;

export const WhatsAppLink = styled(Link)`
  mask: url(${whatsapp_svg}) center center / 20px 20px no-repeat;
`;

export const SkypeLink = styled(Link)`
  mask: url(${skype_svg}) center center / 20px 20px no-repeat;
`;

export const Brand = styled.a`
  cursor: pointer;
  user-select: none;
`;

export const BrandImg = styled.img`
  width: 200px;
  height: 45px;
  object-fit: contain;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

BrandImg.defaultProps = {
  src: nyoka_lg_svg,
  alt: 'Nyoka'
};

export const BrandImgSmall = styled.img`
  display: none;
  width: 80px;
  height: 45px;
  object-fit: contain;

  @media screen and (max-width: 767px) {
    display: block;
  }
`;

BrandImgSmall.defaultProps = {
  src: nyoka_sm_svg,
  alt: 'Nyoka'
};

const Btn = styled.div`
  width: 32px;
  height: 32px;
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const SideBtn = styled(Btn)`
  background-image: url(${side_btn_svg});
  background-size: 30px 12px;
`;

export const Close = styled(Btn)`
  background-image: url(${close_btn_svg});
  background-size: 12px 12px;
`;

import styled from 'styled-components';

import {ContactsForm} from 'components/Forms/ContactsForm';

const
  email_svg = '/images/icons/email.svg',
  phone_svg = '/images/icons/phone.svg',
  point_svg = '/images/icons/point.svg';

export const Container = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
  display: grid;
  grid-template-columns: 720px 1fr;
  grid-template-rows: repeat(7, auto) 1fr;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    grid-template-columns: 540px 1fr;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 767px) {
    margin-top: 40px;
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.div`
  grid-row: 1;
  grid-column: 1 / 3;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  color: #FFFFFF;

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

const Text = styled.div`
  grid-column: 1;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
`;

export const Text1 = styled(Text)`
  grid-row: 2;
  margin-top: 20px;
`;

export const Text2 = styled(Text)`
  grid-row: 5;
  margin-top: 10px;
`;

export const Text3 = styled(Text)`
  grid-row: 6;
  margin-top: 20px;
`;

export const Text4 = styled(Text)`
  grid-row: 8;
  margin-top: 10px;
  max-width: 630px;
`;

const Info = styled.a`
  margin-top: 10px;
  padding-left: 32px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  background-position: left center;
  background-repeat: no-repeat;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Email = styled(Info)`
  grid-row: 3;
  grid-column: 1;
  background-image: url(${email_svg});
  background-size: 20px 20px;
  width: fit-content;
`;

export const Phone = styled(Info)`
  grid-row: 4;
  grid-column: 1;
  background-image: url(${phone_svg});
  background-size: 20px 20px;
  width: fit-content;
`;

export const Point = styled.p`
  grid-row: 7;
  grid-column: 1;
  margin-top: 10px;
  padding-left: 32px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  background-repeat: no-repeat;
  background-image: url(${point_svg});
  background-size: 20px 20px;
  max-width: 450px;
`;

export const Form = styled(ContactsForm)`
  grid-row: 1 / 9;
  grid-column: 2;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 40px;
    grid-row: 9;
    grid-column: 1;
  }

  @media screen and (max-width: 767px) {
    margin-top: 20px;
    grid-row: 9;
    grid-column: 1;
  }
`;

import styled from 'styled-components';

import {
  Body as BodyBase
} from 'components/Modals';
import {Button2} from 'components/Forms';

export const Body = styled(BodyBase)`
  margin-top: 180px;
  width: 420px;
  height: 161px;

  @media screen and (max-width: 767px) {
    margin-top: 0;
    width: 100vw;
    height: 100vh;
  }
`;

export const Content = styled.div`
  margin-top: 40px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #30C69D;
`;

export const OkBtn = styled(Button2)`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    margin-top: 40px;
    width: 100%;
  }
`;

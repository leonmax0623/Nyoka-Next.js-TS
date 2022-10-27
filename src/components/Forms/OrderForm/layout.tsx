import styled from 'styled-components';

import {
  Label,
  Field,
  Checkbox
} from 'components/Forms';

export const Form = styled.div`
  width: 620px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  column-gap: 20px;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    grid-template-columns: 1fr;
    width: 390px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const OrderLabel = styled(Label)`
  margin-top: 20px;
`;

const OrderField = styled(Field)`
  margin-top: 46px;
  width: 300px;

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

export const ProjectLabel = styled(OrderLabel)`
  grid-row: 1;
  grid-column: 1;
`;

export const ProjectField = styled(OrderField)`
  grid-row: 1;
  grid-column: 1;
`;

export const NameLabel = styled(OrderLabel)`
  grid-row: 1;
  grid-column: 2;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    grid-row: 2;
    grid-column: 1;
  }

  @media screen and (max-width: 767px) {
    grid-row: 2;
    grid-column: 1;
  }
`;

export const NameField = styled(OrderField)`
  grid-row: 1;
  grid-column: 2;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    grid-row: 2;
    grid-column: 1;
  }

  @media screen and (max-width: 767px) {
    grid-row: 2;
    grid-column: 1;
  }
`;

export const EmailLabel = styled(OrderLabel)`
  grid-row: 2;
  grid-column: 1;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    grid-row: 3;
    grid-column: 1;
  }

  @media screen and (max-width: 767px) {
    grid-row: 3;
    grid-column: 1;
  }
`;

export const EmailField = styled(OrderField)`
  grid-row: 2;
  grid-column: 1;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    grid-row: 3;
    grid-column: 1;
  }

  @media screen and (max-width: 767px) {
    grid-row: 3;
    grid-column: 1;
  }
`;

export const PhoneLabel = styled(OrderLabel)`
  grid-row: 2;
  grid-column: 2;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    grid-row: 4;
    grid-column: 1;
  }

  @media screen and (max-width: 767px) {
    grid-row: 4;
    grid-column: 1;
  }
`;

export const PhoneField = styled(OrderField)`
  grid-row: 2;
  grid-column: 2;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    grid-row: 4;
    grid-column: 1;
  }

  @media screen and (max-width: 767px) {
    grid-row: 4;
    grid-column: 1;
  }
`;

export const Agreement = styled.div`
  margin-top: 20px;
  grid-row: 7;
  grid-column: 1 / 3;
  display: flex;
  justify-content: stretch;
  align-items: center;
  cursor: pointer;
  width: fit-content;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    grid-row: 7;
    grid-column: 1;
  }

  @media screen and (max-width: 767px) {
    grid-row: 7;
    grid-column: 1;
  }
`;

export const AgreementCheck = styled(Checkbox)`
  @media screen and (max-width: 767px) {
    align-self: start;
    margin-top: 2px;
  }
`;

export const AgreementText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  height: 20px;
  flex: 1 0;
  margin-left: 10px;

  @media screen and (max-width: 767px) {
    height: auto;
  }
`;

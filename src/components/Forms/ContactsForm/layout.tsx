import styled from 'styled-components';

import {
  Label,
  Field,
  Msg,
  Checkbox,
  SubmitButton
} from 'components/Forms';

export const Container = styled.div`
  width: 700px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #1B1C2E;
  border-radius: 8px;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    width: 520px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    border-radius: 0;
    width: 100vw;
    margin-left: -20px;
    margin-right: -20px;
  }
`;

export const Form = styled.form`
  margin: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(8, auto);
  column-gap: 20px;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, auto);
    margin: 20px;
    column-gap: 0;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
  grid-row: 1;
  grid-column: 1 / 3;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 16px;
  }
`;

const ContactsLabel = styled(Label)`
  margin-top: 20px;
`;

const ContactsField = styled(Field)`
  margin-top: 46px;
  width: 300px;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    width: 210px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const NameLabel = styled(ContactsLabel)`
  grid-row: 2;
  grid-column: 1;
`;

export const NameField = styled(ContactsField)`
  grid-row: 2;
  grid-column: 1;
`;

export const EmailLabel = styled(ContactsLabel)`
  grid-row: 3;
  grid-column: 1;
`;

export const EmailField = styled(ContactsField)`
  grid-row: 3;
  grid-column: 1;
`;

export const PhoneLabel = styled(ContactsLabel)`
  grid-row: 3;
  grid-column: 2;

  @media screen and (max-width: 767px) {
    grid-row: 4;
    grid-column: 1;
  }
`;

export const PhoneField = styled(ContactsField)`
  grid-row: 3;
  grid-column: 2;

  @media screen and (max-width: 767px) {
    grid-row: 4;
    grid-column: 1;
  }
`;

export const MsgLabel = styled(ContactsLabel)`
  grid-row: 4;
  grid-column: 1 / 3;

  @media screen and (max-width: 767px) {
    grid-row: 5;
    grid-column: 1;
  }
`;

export const ContactsMsg = styled(Msg)`
  width: 620px;
  height: 120px;
  margin-top: 46px;
  grid-row: 4;
  grid-column: 1 / 3;

  @media screen and (min-width: 1200px) and (max-width: 1800px) {
    width: 440px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    grid-row: 5;
    grid-column: 1;
  }
`;

export const Agreement = styled.div`
  margin-top: 18px;
  grid-row: 7;
  grid-column: 1 / 3;
  display: flex;
  justify-content: stretch;
  align-items: center;
  cursor: pointer;
  width: fit-content;

  @media screen and (max-width: 767px) {
    grid-row: 8;
    grid-column: 1;
  }
`;

export const AgreementCheck = styled(Checkbox)``;

export const AgreementText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  height: 20px;
  flex: 1 0;
  margin-left: 10px;
`;

export const SendBtn = styled(SubmitButton)`
  grid-row: 8;
  grid-column: 1;
  margin-top: 40px;
  width: 118px;

  @media screen and (max-width: 767px) {
    grid-row: 9;
    grid-column: 1;
    width: 100%;
  }
`;

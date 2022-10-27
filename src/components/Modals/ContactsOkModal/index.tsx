import {FC} from 'react';

import {lang} from 'lang/ru';
import {
  Body,
  Content,
  OkBtn
} from './layout';
import {
  Back,
  Close,
  Container,
  Title
} from 'components/Modals';

export const ContactsOkModal: FC<{onClose: () => void}> = ({onClose}) => {
  const {contacts} = lang;

  return (
    <Back>
      <Body>
        <Container>
          <Title>{contacts.feedback}</Title>
          <Content>{contacts.success}</Content>
          <OkBtn onClick={onClose}>{contacts.ok}</OkBtn>
        </Container>
        <Close onClick={onClose} />
      </Body>
    </Back>
  );
};

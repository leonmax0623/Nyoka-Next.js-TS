import {useState, FC} from 'react';

import {lang} from 'lang/ru';
import {
  Container,
  Form,
  Title,
  NameLabel,
  NameField,
  PhoneLabel,
  PhoneField,
  EmailLabel,
  EmailField,
  MsgLabel,
  ContactsMsg,
  Agreement,
  AgreementCheck,
  AgreementText,
  SendBtn
} from './layout';
import {HiddenCheckbox} from 'components/Forms';
import {ContactsOkModal} from 'components/Modals/ContactsOkModal';

interface ContactsFormProps {
  className?: string;
}

export const ContactsForm: FC<ContactsFormProps> = ({className}) => {
  const [agree, setAgree] = useState(false);
  const [fb, setFb] = useState(false);
  const {contacts} = lang;

  const checkboxHandleChange = (event: any) => {
    setAgree(event.target.checked);
  };

  return (
    <Container className={className}>
      <Form action="/send_contact_form" method="post">
        <Title>{contacts.form}</Title>
        <NameLabel htmlFor="cf-name">{contacts.name}</NameLabel>
        <NameField tabIndex={1} type="text" name="cf-name" id="cf-name" minLength={1} maxLength={50} required />
        <PhoneLabel htmlFor="cf-phone">{contacts.phone}</PhoneLabel>
        <PhoneField tabIndex={3} type="tel" name="cf-phone" id="cf-phone" required />
        <EmailLabel htmlFor="cf-email">{contacts.email}</EmailLabel>
        <EmailField tabIndex={2} type="email" name="cf-email" id="cf-email" required />
        <MsgLabel htmlFor="cf-msg">{contacts.message}</MsgLabel>
        <ContactsMsg tabIndex={4} name="cf-msg" id="cf-msg" minLength={1} maxLength={5000} required />
        <Agreement onClick={() => setAgree(!agree)}>
          <AgreementCheck checked={agree} />
          <HiddenCheckbox onChange={checkboxHandleChange} checked={agree} aria-hidden="true" name="cf-checkbox" id="cf-checkbox" required />
          <AgreementText id="cf-checkbox-text">{contacts.agree}</AgreementText>
        </Agreement>
        <SendBtn type="submit" id="cf-send-btn">{contacts.send.toUpperCase()}</SendBtn>
      </Form>
      {fb && <ContactsOkModal onClose={() => setFb(false)} />}
    </Container>
  );
};

ContactsForm.defaultProps = {
  className: undefined
};

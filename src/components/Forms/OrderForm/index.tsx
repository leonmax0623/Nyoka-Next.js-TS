import {useState, FC} from 'react';

import {lang} from 'lang/ru';
import {
  Form,
  ProjectLabel,
  ProjectField,
  EmailLabel,
  EmailField,
  NameLabel,
  NameField,
  PhoneLabel,
  PhoneField,
  Agreement,
  AgreementCheck,
  AgreementText
} from './layout';
import {HiddenCheckbox} from 'components/Forms';

interface OrderFormProps {
  className?: string;
}

export const OrderForm: FC<OrderFormProps> = ({className}) => {
  const [agree, setAgree] = useState(false);
  const {order} = lang;

  const checkboxHandleChange = (event: any) => {
    setAgree(event.target.checked);
  };

  return (
    <Form className={className}>
      <ProjectLabel htmlFor="of-project">{order.fields.project}</ProjectLabel>
      <ProjectField tabIndex={1} type="text" name="of-project" id="of-project" minLength={1} maxLength={50} required />
      <EmailLabel htmlFor="of-email">{order.fields.email}</EmailLabel>
      <EmailField tabIndex={3} type="email" name="of-email" id="of-email" required />
      <NameLabel htmlFor="of-name">{order.fields.name}</NameLabel>
      <NameField tabIndex={2} type="text" name="of-name" id="of-name" minLength={1} maxLength={50} required />
      <PhoneLabel htmlFor="of-phone">{order.fields.phone}</PhoneLabel>
      <PhoneField tabIndex={4} type="tel" name="of-phone" id="of-phone" required />
      <Agreement onClick={() => setAgree(!agree)}>
        <AgreementCheck checked={agree} />
        <HiddenCheckbox onChange={checkboxHandleChange} checked={agree} aria-hidden="true" name="of-checkbox" id="of-checkbox" required />
        <AgreementText id="of-checkbox-text">{order.fields.agreement}</AgreementText>
      </Agreement>
    </Form>
  );
};

OrderForm.defaultProps = {
  className: undefined
};

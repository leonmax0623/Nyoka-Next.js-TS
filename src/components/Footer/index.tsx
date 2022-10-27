import Link from 'next/link';

import {
  Container,
  Copyright,
  Privacy,
  Links
} from './layout';

import {
  TelegramLink,
  WhatsAppLink,
  SkypeLink
} from 'components/Icons';
import {lang} from 'lang/ru';

export const Footer = () => {
  const {layout: {footer}} = lang;

  return (
    <Container>
      <Copyright>{footer.copy}</Copyright>
      <Link href="/privacy" passHref>
        <Privacy>{footer.privacy}</Privacy>
      </Link>
      <Links>
        <TelegramLink href="https://t.me/nyoka_company" rel="nofollow noreferrer" target="_blank" aria-label="Telegram"></TelegramLink>
        <WhatsAppLink href="https://wa.me/79126429605" rel="nofollow noreferrer" target="_blank" aria-label="WhatsApp"></WhatsAppLink>
        <SkypeLink href="https://join.skype.com/invite/oN5Nn9ho9hN9" rel="nofollow noreferrer" target="_blank" aria-label="Skype"></SkypeLink>
      </Links>
    </Container>
  );
};

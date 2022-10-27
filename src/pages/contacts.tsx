import type {NextPage} from 'next';
import Head from 'next/head';
import Link from 'next/link';

import {lang} from 'lang/ru';
import {
  Container,
  Title,
  Text1,
  Text2,
  Text3,
  Text4,
  Email,
  Phone,
  Point,
  Form
} from 'components/Contacts/layout';

const Contacts: NextPage = () => {
  const {contacts, seo} = lang;

  return (
    <Container>
      <Head>
        <title>{`${contacts.head.title} – ${seo.meta_site_name}`}</title>
        <meta name="description" content={contacts.seo.meta_description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={contacts.head.title} />
        <meta property="og:site_name" content={seo.meta_site_name} />
      </Head>
      <Title>{contacts.title}</Title>
      <Text1>{contacts.text[0]}</Text1>
      <Link href={`mailto:${contacts.contact_email}`} passHref>
        <Email>{contacts.contact_email}</Email>
      </Link>
      <Link href={`tel:${contacts.contact_phone_href}`} passHref>
        <Phone>{contacts.contact_phone}</Phone>
      </Link>
      <Text2>{contacts.text[1]}</Text2>
      <Text3>{contacts.text[2]}</Text3>
      <Point dangerouslySetInnerHTML={{__html: contacts.contact_address}} />
      <Text4 dangerouslySetInnerHTML={{__html: contacts.text[3]}} />
      <Form />
    </Container>
  );
};

export default Contacts;

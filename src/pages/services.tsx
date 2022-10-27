import type {NextPage} from 'next';
import Head from 'next/head';
import {useState} from 'react';

import {lang} from 'lang/ru';
import {
  Container,
  Title,
  Menu,
  ContentContainer,
  ContentTitle,
  Content
} from 'components/Services/layout';
import {MenuItem} from 'components/Services/MenuItem';
import {FadeComponent} from 'components/Animations/Fade';

const Services: NextPage = () => {
  const [show, setShow] = useState(true);
  const {services, seo} = lang;
  const [menuItem, setMenuItem] = useState(0);

  return (
    <Container>
      <Head>
        <title>{`${services.title} – ${seo.meta_site_name}`}</title>
        <meta name="description" content={services.seo.meta_description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={services.title} />
        <meta property="og:site_name" content={seo.meta_site_name} />
      </Head>
      <Title>{services.title}</Title>
      <Menu>
        {services.menu.map((item: string, idx: number) => (
          <MenuItem onClick={async () => {
            await setShow(false);
            await setMenuItem(idx);
            await setShow(true);
          }} key={item} active={menuItem === idx} title={item} content={services.content[menuItem]}>
          </MenuItem>
        ))}
      </Menu>
      {show ? (<FadeComponent defaultValue={'1'}>
        <ContentContainer>
          <ContentTitle>{services.menu[menuItem]}</ContentTitle>
          <Content dangerouslySetInnerHTML={{__html: services.content[menuItem]}} />
        </ContentContainer>
      </FadeComponent>) : null}
    </Container>
  );
};

export default Services;

import type {NextPage} from 'next';
import Head from 'next/head';

import {lang} from 'lang/ru';
import {
  Container
} from 'components/Main/layout';

const Custom500: NextPage = () => {
  const {error500, seo} = lang;

  return (
    <Container>
      <Head>
        <title>{`${error500.title} – ${seo.meta_site_name}`}</title>
      </Head>
      500
    </Container>
  );
};

export default Custom500;

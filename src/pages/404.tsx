import type {NextPage} from 'next';
import Head from 'next/head';

import {lang} from 'lang/ru';
import {
  Container
} from 'components/Main/layout';

const Custom404: NextPage = () => {
  const {error404, seo} = lang;

  return (
    <Container>
      <Head>
        <title>{`${error404.title} – ${seo.meta_site_name}`}</title>
      </Head>
      404
    </Container>
  );
};

export default Custom404;

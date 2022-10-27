import type {NextPage} from 'next';
import Head from 'next/head';

import {lang} from 'lang/ru';
import {
  Container,
  Title,
  Content,
  Block,
  BlockIdx,
  BlockTitle,
  BlockText,
  Gap
} from 'components/Processes/layout';

const Processes: NextPage = () => {
  const {processes, seo} = lang;

  return (
    <Container>
      <Head>
        <title>{`${processes.title} – ${seo.meta_site_name}`}</title>
        <meta name="description" content={processes.seo.meta_description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={processes.title} />
        <meta property="og:site_name" content={seo.meta_site_name} />
      </Head>
      <Title>{processes.title}</Title>
      <Content>
        {processes.menu.map((item: string, idx: number) => (
          <>
            <Block>
              <BlockIdx>{idx + 1}</BlockIdx>
              <BlockTitle>{item}</BlockTitle>
              <BlockText>{processes.content[idx]}</BlockText>
            </Block>
            {idx !== 7 && <Gap wrap={idx === 3} />}
          </>
        ))}
      </Content>
    </Container>
  );
};

export default Processes;

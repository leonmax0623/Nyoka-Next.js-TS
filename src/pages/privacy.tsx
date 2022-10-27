import type {NextPage} from 'next';
import Head from 'next/head';
import Link from 'next/link';

import {lang} from 'lang/ru';
import {
  Container,
  Title,
  Details,
  ItemTitle,
  Text,
  SubTitle,
  SubText,
  Dot,
  Email
} from 'components/Privacy/layout';

const Privacy: NextPage = () => {
  const {privacy, seo} = lang;

  return (
    <Container>
      <Head>
        <title>{`${privacy.head.title} – ${seo.meta_site_name}`}</title>
        <meta name="description" content={privacy.seo.meta_description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={privacy.head.title} />
        <meta property="og:site_name" content={seo.meta_site_name} />
      </Head>
      <Title>{privacy.title}</Title>
      <Details>{privacy.details[0]}</Details>
      <Details>{privacy.details[1]}</Details>
      <Details>{privacy.details[2]}</Details>
      <ItemTitle>{privacy.block1.title}</ItemTitle>
      <Text>{privacy.block1.content}</Text>
      <SubTitle><Dot>&bull;</Dot>{privacy.block1.subItems[0].title}</SubTitle>
      <SubText>{privacy.block1.subItems[0].content}</SubText>
      <SubTitle><Dot>&bull;</Dot>{privacy.block1.subItems[1].title}</SubTitle>
      <SubText>{privacy.block1.subItems[1].content}</SubText>
      <SubTitle><Dot>&bull;</Dot>{privacy.block1.subItems[2].title}</SubTitle>
      <SubText>{privacy.block1.subItems[2].content}</SubText>

      <ItemTitle>{privacy.block2.title}</ItemTitle>
      <Text>{privacy.block2.content[0]}</Text>
      <Text>{privacy.block2.content[1]}</Text>
      <SubTitle><Dot>&bull;</Dot>{privacy.block2.subItems[0].title}</SubTitle>
      <SubText>{privacy.block2.subItems[0].content}</SubText>
      <SubTitle><Dot>&bull;</Dot>{privacy.block2.subItems[1].title}</SubTitle>
      <SubText>{privacy.block2.subItems[1].content}</SubText>
      <SubTitle><Dot>&bull;</Dot>{privacy.block2.subItems[2].title}</SubTitle>
      <SubText>{privacy.block2.subItems[2].content}</SubText>
      <SubTitle><Dot>&bull;</Dot>{privacy.block2.subItems[3].title}</SubTitle>
      <SubText>{privacy.block2.subItems[3].content}</SubText>
      <SubTitle><Dot>&bull;</Dot>{privacy.block2.subItems[4].title}</SubTitle>
      <SubText>{privacy.block2.subItems[4].content}</SubText>

      <ItemTitle>{privacy.block3.title}</ItemTitle>
      <Text>{privacy.block3.content[0]}</Text>
      <Text>{privacy.block3.content[1]}</Text>

      <ItemTitle>{privacy.block4.title}</ItemTitle>
      <Text>{privacy.block4.content}</Text>

      <ItemTitle>{privacy.block5.title}</ItemTitle>
      <Text>{privacy.block5.content}</Text>

      <ItemTitle>{privacy.block6.title}</ItemTitle>
      <Text>{privacy.block6.content}</Text>

      <ItemTitle>{privacy.block7.title}</ItemTitle>
      <Text>{privacy.block7.content}</Text>
      <SubTitle><Dot>&bull;</Dot>{privacy.block7.subItems[0].title}</SubTitle>
      <SubText>{privacy.block7.subItems[0].content}</SubText>
      <SubTitle><Dot>&bull;</Dot>{privacy.block7.subItems[1].title}</SubTitle>
      <SubText>
        {privacy.block7.subItems[1].content[0]}
        <Link href={privacy.email_html} passHref>
          <Email>{privacy.email_text}</Email>
        </Link>
        {privacy.block7.subItems[1].content[1]}
      </SubText>
      <SubTitle><Dot>&bull;</Dot>{privacy.block7.subItems[2].title}</SubTitle>
      <SubText>{privacy.block7.subItems[2].content}</SubText>
      <SubTitle><Dot>&bull;</Dot>{privacy.block7.subItems[3].title}</SubTitle>
      <SubText>{privacy.block7.subItems[3].content}</SubText>
      <SubTitle><Dot>&bull;</Dot>{privacy.block7.subItems[4].title}</SubTitle>
      <SubText>{privacy.block7.subItems[4].content}</SubText>

      <ItemTitle>{privacy.block8.title}</ItemTitle>
      <Text>{privacy.block8.content}</Text>
      <SubText>{privacy.block8.subItems[0].content}</SubText>
      <SubText>
        {privacy.block8.subItems[1].content[0]}
        <Link href={privacy.email_html} passHref>
          <Email>{privacy.email_text}</Email>
        </Link>
        {privacy.block8.subItems[1].content[1]}
      </SubText>
      <SubText>{privacy.block8.subItems[2].content}</SubText>
      <SubText>{privacy.block8.subItems[3].content}</SubText>
      <SubText>{privacy.block8.subItems[4].content}</SubText>

      <ItemTitle>{privacy.block9.title}</ItemTitle>
      <Text>{privacy.block9.content}</Text>

      <ItemTitle>{privacy.block10.title}</ItemTitle>
      <Text>{privacy.block10.content[0]}</Text>
      <Text>{privacy.block10.content[1]}</Text>

      <ItemTitle>{privacy.block11.title}</ItemTitle>
      <Text>{privacy.block11.content[0]}</Text>
      <SubText>{privacy.block11.subItems[0].content}</SubText>
      <SubText>{privacy.block11.subItems[1].content}</SubText>
      <SubText>{privacy.block11.subItems[2].content}</SubText>
      <Text>{privacy.block11.content[1]}</Text>

      <ItemTitle>{privacy.block12.title}</ItemTitle>
      <Text>{privacy.block12.content}</Text>

      <ItemTitle>{privacy.block13.title}</ItemTitle>
      <Text>
        {privacy.block13.content[0]}
        <Link href={privacy.email_html} passHref>
          <Email>{privacy.email_text}</Email>
        </Link>
        {privacy.block13.content[1]}
      </Text>

      <Text>{privacy.block14.content}</Text>
    </Container>
  );
};

export default Privacy;

import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/future/image';
import {nanoid} from 'nanoid';

import {lang} from 'lang/ru';
import {
  Container,
  Title,
  Banner,
  BannerSubText,
  Text,
  SubTitle,
  Stat,
  Block,
  BlockCounter,
  BlockText,
  ImageContainer,
  ProjectsList,
  ProjectsListItem
} from 'components/About/layout';

const About: NextPage = () => {
  const {about, seo} = lang;
  const imageCss = {maxWidth: '100%', height: 'auto'};

  return (
    <Container>
      <Head>
        <title>{`${about.title} – ${seo.meta_site_name}`}</title>
        <meta name="description" content={about.seo.meta_description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={about.title} />
        <meta property="og:site_name" content={seo.meta_site_name} />
      </Head>
      <Title>{about.title}</Title>
      <Banner>
        <BannerSubText>{about.banner[0]}</BannerSubText>
        <BannerSubText>{about.banner[1]}</BannerSubText>
      </Banner>
      <Text dangerouslySetInnerHTML={{__html: about.text[0]}} />
      <Text dangerouslySetInnerHTML={{__html: about.text[1]}} />
      <Stat>
        <Block>
          <BlockCounter>{about.all_projects_cnt}</BlockCounter>
          <BlockText>{about.all_projects_text}</BlockText>
        </Block>
        <Block>
          <BlockCounter>{about.returned_projects_cnt}</BlockCounter>
          <BlockText>{about.returned_projects_text}</BlockText>
        </Block>
        <Block>
          <BlockCounter>{about.current_projects_cnt}</BlockCounter>
          <BlockText>{about.current_projects_text}</BlockText>
        </Block>
      </Stat>
      <SubTitle>{about.subtitles[0]}</SubTitle>
      <ImageContainer>
        <Image src="/images/projects_map.png" alt={about.subtitles[0]} style={imageCss} width={930} height={532} draggable="false" />
      </ImageContainer>
      <ProjectsList>
        {about.countries.map((country: string) => (
          <ProjectsListItem key={nanoid()}>{country}</ProjectsListItem>
        ))}
      </ProjectsList>
    </Container>
  );
};

export default About;

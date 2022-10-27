import type {NextPage} from 'next';
import Head from 'next/head';
import {useState} from 'react';
import {SwiperSlide} from 'swiper/react';
import {nanoid} from 'nanoid';

import {lang} from 'lang/ru';
import {
  Container,
  SubTitleOne,
  SubTitleTwo,
  SubTitleThree,
  Title,
  ProjectBtn,
  Quote,
  HeaderOne,
  HeaderTwo,
  HeaderThree,
  TaskList,
  TaskListItem,
  Techs,
  TechItem,
  AdvantagesContainer,
  AdvantageBlock,
  AdvantageIcon,
  AdvantageText,
  AdvantagesSwiper
} from 'components/Main/layout';
import {Order} from 'components/Order';

const Home: NextPage = () => {
  const {main, seo} = lang;
  const [proj, setProj] = useState(false);

  return (
    <Container>
      <Head>
        <title>{`${main.title} – ${seo.meta_site_name}`}</title>
        <meta name="description" content={main.seo.meta_description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={main.title} />
        <meta property="og:site_name" content={seo.meta_site_name} />
      </Head>

      <SubTitleOne>{main.subtitles[0]}</SubTitleOne>
      <Title>{main.title}</Title>
      <SubTitleTwo>{main.subtitles[1]}</SubTitleTwo>
      <SubTitleThree>{main.subtitles[2]}</SubTitleThree>

      <ProjectBtn onClick={() => setProj(true)}>{main.start_project.toUpperCase()}</ProjectBtn>
      {proj && <Order onClose={() => setProj(false)} />}

      <Quote dangerouslySetInnerHTML={{__html: main.quote}} />

      <HeaderOne>{main.headers[0]}</HeaderOne>
      <TaskList>
        {main.tasks.map((task: string) => (
          <TaskListItem key={nanoid()}>{task}</TaskListItem>
        ))}
      </TaskList>

      <HeaderTwo>{main.headers[1]}</HeaderTwo>
      <Techs>
        {main.techs.map((tech: string) => (
          <TechItem key={nanoid()}>{tech}</TechItem>
        ))}
      </Techs>

      <HeaderThree>{main.headers[2]}</HeaderThree>
      <AdvantagesContainer>
        {main.advantages.map((item: {url: string, text: string}) => (
          <AdvantageBlock key={nanoid()}>
            <AdvantageIcon iconUrl={item.url} />
            <AdvantageText dangerouslySetInnerHTML={{__html: item.text}} />
          </AdvantageBlock>
        ))}
      </AdvantagesContainer>
      <AdvantagesSwiper pagination>
        {main.advantages.map((item: {url: string, text: string}) => (
          <SwiperSlide key={nanoid()}>
            <AdvantageBlock>
              <AdvantageIcon iconUrl={item.url} />
              <AdvantageText dangerouslySetInnerHTML={{__html: item.text}} />
            </AdvantageBlock>
          </SwiperSlide>
        ))}
      </AdvantagesSwiper>
    </Container>
  );
};

export default Home;

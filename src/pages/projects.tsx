import type {NextPage} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {SwiperSlide} from 'swiper/react';
import {nanoid} from 'nanoid';
import {lang} from 'lang/ru';
import {
  Container,
  Title,
  ProjectsContainer,
  Project,
  ProjectImgContainer,
  ProjectText,
  ProjectsSwiper
} from 'components/Projects/layout';

const Projects: NextPage = () => {
  const {projects, seo} = lang;

  return (
    <Container>
      <Head>
        <title>{`${projects.title} – ${seo.meta_site_name}`}</title>
        <meta name="description" content={projects.seo.meta_description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={projects.title} />
        <meta property="og:site_name" content={seo.meta_site_name} />
      </Head>
      <Title>{projects.title}</Title>
      <ProjectsContainer>
        {projects.items.map((item: {title: string, logo: string}, idx: number) => (
          <Project key={nanoid()}>
            <Link href={`/project/${idx}`} passHref>
              <ProjectImgContainer>
                <Image src={item.logo} alt={item.title} width="80%" height="80%" draggable="false" />
              </ProjectImgContainer>
            </Link>
            <ProjectText>{item.title}</ProjectText>
          </Project>
        ))}
      </ProjectsContainer>
      <ProjectsSwiper pagination>
        {projects.items.map((item: {title: string, logo: string}, idx: number) => (
          <SwiperSlide key={nanoid()}>
            <Project>
              <Link href={`/project/${idx}`} passHref>
                <ProjectImgContainer>
                  <Image src={item.logo} alt={item.title} width="80%" height="80%" draggable="false" />
                </ProjectImgContainer>
              </Link>
              <ProjectText>{item.title}</ProjectText>
            </Project>
          </SwiperSlide>
        ))}
      </ProjectsSwiper>
    </Container>
  );
};

export default Projects;

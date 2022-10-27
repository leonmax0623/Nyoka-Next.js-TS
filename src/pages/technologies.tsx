import type {NextPage} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect, useRef} from 'react';
import {SwiperSlide} from 'swiper/react';
import {nanoid} from 'nanoid';

import {lang} from 'lang/ru';
import {
  Container,
  Title,
  Techs,
  ArrowRightBack,
  ArrowRight,
  ArrowLeftBack,
  ArrowLeft,
  Item,
  Details,
  Logo,
  TechText,
  TechTitle,
  SubTitle,
  Projects,
  Project,
  ProjectImgContainer,
  ProjectText,
  ProjectsSwiper,
  NoProjectsButton,
  StartProjectButton
} from 'components/Technologies/layout';
import {Order} from '../components/Order';

const Technologies: NextPage = () => {
  const {techs, projects, seo} = lang;
  const [tech, setTech] = useState(0);
  const ref = useRef();
  const [scroll, setScroll] = useState(0);
  const [max, setMax] = useState(1000);
  const [proj, setProj] = useState(false);

  useEffect(() => {
    if (ref && ref.current) {
      const el = ref.current as any;
      if (el) {
        setScroll(el.scrollLeft);
        const body = document.body.getBoundingClientRect();
        setMax(el.scrollWidth - 14 - body.width);
        const bind = () => {
          setScroll(el.scrollLeft);
        };
        el.addEventListener('scroll', bind);
        return () => {
          el.removeEventListener('scroll', bind);
        };
      }
    }
  }, [ref]);

  const isStart = () => scroll > 4;
  const isEnd = () => scroll < max;

  const renderProjects = () => (
    <>
      <SubTitle>{techs.subtitle}</SubTitle>
      <Projects>
        {techs.list[tech].projects.map((idx: number) => (
          <Project key={nanoid()}>
            <Link href={`/project/${idx}`} passHref>
              <ProjectImgContainer>
                <Image src={projects.items[idx].logo} width="80%" height="80%" alt={projects.items[idx].title} draggable="false" />
              </ProjectImgContainer>
            </Link>
            <ProjectText>{projects.items[idx].title}</ProjectText>
          </Project>
        ))}
      </Projects>
      <ProjectsSwiper pagination>
        {techs.list[tech].projects.map((idx: number) => (
          <SwiperSlide key={nanoid()}>
            <Project>
              <Link href={`/project/${idx}`} passHref>
                <ProjectImgContainer>
                  <Image src={projects.items[idx].logo} width="80%" height="80%" alt={projects.items[idx].title} draggable="false" />
                </ProjectImgContainer>
              </Link>
              <ProjectText>{projects.items[idx].title}</ProjectText>
            </Project>
          </SwiperSlide>
        ))}
      </ProjectsSwiper>
      <StartProjectButton onClick={() => setProj(true)}>{techs.no_projects_button.toUpperCase()}</StartProjectButton>
    </>
  );

  const renderNoProjectsButton = () => <NoProjectsButton
    onClick={() => setProj(true)}>{techs.no_projects_button.toUpperCase()}</NoProjectsButton>;

  return (
    <Container>
      <Head>
        <title>{`${techs.title} – ${seo.meta_site_name}`}</title>
        <meta name="description" content={techs.seo.meta_description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={techs.title} />
        <meta property="og:site_name" content={seo.meta_site_name} />
      </Head>
      <Title>{techs.title}</Title>
      <Techs ref={ref}>
        <ArrowLeftBack active={isStart()}><ArrowLeft /></ArrowLeftBack>
        {techs.list.map((item: {title: string}, idx: number) => (
          <Item key={nanoid()} onClick={() => setTech(idx)} active={tech === idx}>{item.title}</Item>
        ))}
        <ArrowRightBack active={isEnd()}><ArrowRight /></ArrowRightBack>
      </Techs>
      <Details>
        <Logo defaultValue={techs.list[tech].image} />
        <TechTitle>{techs.list[tech].title}</TechTitle>
        <TechText dangerouslySetInnerHTML={{__html: techs.list[tech].details}} />
      </Details>
      {techs.list[tech].projects.length === 0 ? renderNoProjectsButton() : renderProjects()}

      {proj && <Order onClose={() => setProj(false)} />}
    </Container>
  );
};

export default Technologies;

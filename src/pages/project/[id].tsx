import type {NextPage} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/future/image';
import {useRouter} from 'next/router';
import {nanoid} from 'nanoid';

import {lang} from 'lang/ru';
import {
  Container,
  Breadcrumbs,
  BackArrow,
  BackText,
  Title,
  Subtitle,
  Description,
  ImageContainer,
  ImageContainerMobile,
  TechsTitle,
  Techs,
  Tech
} from 'components/Project/layout';

const Project: NextPage = () => {
  const router = useRouter();
  const id: string = (router.query.id || '0').toString();
  const {projects, seo} = lang;
  const project = projects.items[parseInt(id)];
  const imageCss = {maxWidth: '100%', height: 'auto'};

  return (
    <Container>
      <Head>
        <title>{`${project.title} – ${seo.meta_site_name}`}</title>
        <meta name="description" content={project.seo.meta_description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={project.title} />
        <meta property="og:site_name" content={seo.meta_site_name} />
      </Head>
      <Link href="/projects" passHref>
        <Breadcrumbs>
          <BackArrow />
          <BackText>{projects.back}</BackText>
        </Breadcrumbs>
      </Link>
      <Title>{project.title}</Title>
      <Subtitle>{projects.industryTitle}</Subtitle>
      <Description dangerouslySetInnerHTML={{__html: project.industry}} />
      <Subtitle>{projects.clientTitle}</Subtitle>
      <Description dangerouslySetInnerHTML={{__html: project.client}} />
      <Subtitle>{projects.descriptionTitle}</Subtitle>
      <Description dangerouslySetInnerHTML={{__html: project.description}} />
      <Subtitle>{projects.taskTitle}</Subtitle>
      <Description dangerouslySetInnerHTML={{__html: project.task}} />
      <ImageContainer>
        <Image src={project.cover.url} alt={project.title} style={imageCss} width={project.cover.width} height={project.cover.height} draggable="false" />
      </ImageContainer>
      <ImageContainerMobile>
        <Image src={project.cover_mobile.url} alt={project.title} style={imageCss} width={project.cover_mobile.width} height={project.cover_mobile.height} draggable="false" />
      </ImageContainerMobile>
      <TechsTitle>{projects.techsTitle}</TechsTitle>
      <Techs>
        {project.techs.map((tech: string) => (
          <Tech key={nanoid()}>{tech}</Tech>
        ))}
      </Techs>
      <Subtitle>{projects.resultsTitle}</Subtitle>
      <Description dangerouslySetInnerHTML={{__html: project.results}} />
      <Subtitle>{projects.teamTitle}</Subtitle>
      <Description dangerouslySetInnerHTML={{__html: project.team}} />
      <Subtitle>{projects.developmentTimeTitle}</Subtitle>
      <Description dangerouslySetInnerHTML={{__html: project.development_time}} />
    </Container>
  );
};

export default Project;

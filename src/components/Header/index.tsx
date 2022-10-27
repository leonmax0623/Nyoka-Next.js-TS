import {useState, useEffect} from 'react';
import Link from 'next/link';

import {useRouteCheck} from 'helpers/routes';
import {lang} from 'lang/ru';
import {
  Brand,
  Container,
  Navigation,
  NavItem,
  NavItems,
  SideMenu,
  SideBtn,
  SideBack,
  ProjectBtn,
  Phone
} from './layout';
import {BrandImg, BrandImgSmall} from 'components/Icons';
import {SideBar} from 'components/SideBar';
import {Order} from 'components/Order';

export const Header = () => {
  const routeCheck = useRouteCheck();
  const {layout: {nav, start_project}, contacts} = lang;
  const [open, setOpen] = useState(false);
  const [proj, setProj] = useState(false);

  useEffect(() => {
    if (open)
      document.body.style.overflow = 'hidden';
    else
      document.body.style.overflow = 'auto';
  }, [open]);

  return (
    <Container>
      <Navigation>
        <Link href="/" passHref>
          <Brand draggable="false"><BrandImg draggable="false" /><BrandImgSmall draggable="false" /></Brand>
        </Link>
        <SideMenu>
          {routeCheck('') !== 'active' && (
            <ProjectBtn onClick={() => setProj(true)}>{start_project.toUpperCase()}</ProjectBtn>
          )}
          <Link href={`tel:${contacts.contact_phone_href}`} passHref>
            <Phone>{contacts.contact_phone}</Phone>
          </Link>
          <SideBtn onClick={() => setOpen(true)} />
        </SideMenu>
      </Navigation>
      <NavItems>
        <Link href="/about" passHref>
          <NavItem className={routeCheck('about')}>{nav.about.toUpperCase()}</NavItem>
        </Link>
        <Link href="/services" passHref>
          <NavItem className={routeCheck('services')}>{nav.services.toUpperCase()}</NavItem>
        </Link>
        <Link href="/processes" passHref>
          <NavItem className={routeCheck('processes')}>{nav.processes.toUpperCase()}</NavItem>
        </Link>
        <Link href="/technologies" passHref>
          <NavItem className={routeCheck('technologies')}>{nav.technologies.toUpperCase()}</NavItem>
        </Link>
        <Link href="/projects" passHref>
          <NavItem className={routeCheck('projects') || routeCheck('project')}>{nav.projects.toUpperCase()}</NavItem>
        </Link>
        <Link href="/contacts" passHref>
          <NavItem className={routeCheck('contacts')}>{nav.contacts.toUpperCase()}</NavItem>
        </Link>
      </NavItems>

      {open && (<SideBack><SideBar onClose={() => setOpen(false)} /></SideBack>)}
      {proj && <Order onClose={() => setProj(false)} />}
    </Container>
  );
};

import {FC} from 'react';
import {useRouter} from 'next/router';

import {useRouteCheck} from 'helpers/routes';
import {lang} from 'lang/ru';
import {
  Brand,
  CloseBtn,
  Container,
  Copyright,
  Header,
  InnerContainer,
  Links,
  Navigation,
  NavItem,
  Privacy,
  Back,
  HeaderControls
} from './layout';
import {
  BrandImg,
  BrandImgSmall,
  TelegramLink,
  WhatsAppLink,
  SkypeLink
} from 'components/Icons';
import {BackInRightComponent} from '../Animations/BackInRight';

export const SideBar: FC<{onClose: () => void}> = ({onClose}) => {
  const routeCheck = useRouteCheck();
  const router = useRouter();
  const {layout: {nav, footer}} = lang;

  const toRoute = (route: string) => {
    return () => {
      router.push(route);
      onClose();
    };
  };

  return (
    <BackInRightComponent>
      <Back />
      <Container>
        <InnerContainer>
          <Header>
            <Brand onClick={toRoute('/')}><BrandImg /><BrandImgSmall /></Brand>
            <HeaderControls>
              <CloseBtn onClick={onClose} />
            </HeaderControls>
          </Header>
          <Navigation>
            <NavItem onClick={toRoute('/about')} className={routeCheck('about')}>{nav.about.toUpperCase()}</NavItem>
            <NavItem onClick={toRoute('/services')} className={routeCheck('services')}>{nav.services.toUpperCase()}</NavItem>
            <NavItem onClick={toRoute('/processes')} className={routeCheck('processes')}>{nav.processes.toUpperCase()}</NavItem>
            <NavItem onClick={toRoute('/technologies')} className={routeCheck('technologies')}>{nav.technologies.toUpperCase()}</NavItem>
            <NavItem onClick={toRoute('/projects')} className={routeCheck('projects') || routeCheck('project')}>{nav.projects.toUpperCase()}</NavItem>
            <NavItem onClick={toRoute('/contacts')} className={routeCheck('contacts')}>{nav.contacts.toUpperCase()}</NavItem>
          </Navigation>
          <Links>
            <TelegramLink href="https://t.me/nyoka_company" rel="nofollow noreferrer" target="_blank" aria-label="Telegram"></TelegramLink>
            <WhatsAppLink href="https://wa.me/79126429605" rel="nofollow noreferrer" target="_blank" aria-label="WhatsApp"></WhatsAppLink>
            <SkypeLink href="https://join.skype.com/invite/oN5Nn9ho9hN9" rel="nofollow noreferrer" target="_blank" aria-label="Skype"></SkypeLink>
          </Links>
          <Privacy onClick={toRoute('/privacy')}>{footer.privacy}</Privacy>
          <Copyright>{footer.copy}</Copyright>
        </InnerContainer>
      </Container>
    </BackInRightComponent>
  );
};

import type {FC} from 'react';

import {Container, InnerContainer, Content, BackgroundContainer} from './layout';
import {Header} from 'components/Header';
import {Footer} from 'components/Footer';

export const MainLayout: FC<{children: any}> = ({children}) => {
  return (
    <BackgroundContainer>
      <Container>
        <InnerContainer>
          <Header />
          <Content>
            {children}
          </Content>
          <Footer />
        </InnerContainer>
      </Container>
    </BackgroundContainer>
  );
};

import { Container, styled } from '@material-ui/core';
import React, { ReactElement } from 'react';
import FadeIn from 'react-fade-in';
import Footer from '../Footer';

export type AppLayoutProps = {
  children: ReactElement | ReactElement[];
  fadeIn?: boolean | undefined;
  footer?: boolean | undefined;
};

export default function AppLayout({
  children,
  fadeIn,
  footer,
}: AppLayoutProps) {
  return (
    <>
      {fadeIn ? (
        <>
          <FadeIn delay={0} transitionDuration={500}>
            <AppContainer>{children}</AppContainer>
          </FadeIn>
          {footer ? (
            <FooterContainer>
              <Footer />
            </FooterContainer>
          ) : null}
        </>
      ) : (
        <>
          <AppContainer>
            {children}
            <FooterContainer>
              <Footer />
            </FooterContainer>
          </AppContainer>
        </>
      )}
    </>
  );
}

const AppContainer = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
});

const FooterContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
});

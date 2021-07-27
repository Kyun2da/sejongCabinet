import { Container, styled } from '@material-ui/core';
import React, { ReactElement } from 'react';
import FadeIn from 'react-fade-in';
import Footer from '../Footer';
import media from '../../lib/styles/media';

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
            {footer ? (
              <FooterContainer>
                <Footer />
              </FooterContainer>
            ) : null}
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
});

const FooterContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});

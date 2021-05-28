import { Container, styled } from '@material-ui/core';
import React, { ReactElement } from 'react';
import FadeIn from 'react-fade-in';

export type AppLayoutProps = {
  children: ReactElement | ReactElement[];
  fadeIn?: boolean | undefined;
};

export default function AppLayout({ children, fadeIn }: AppLayoutProps) {
  return (
    <>
      {fadeIn === true ? (
        <FadeIn delay={0} transitionDuration={500}>
          <AppContainer>{children}</AppContainer>
        </FadeIn>
      ) : (
        <AppContainer>{children}</AppContainer>
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

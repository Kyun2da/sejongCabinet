import { styled } from '@material-ui/core';
import React from 'react';
import media from '../../lib/styles/media';

export type HeaderProps = {
  children?: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return <MainHeader>{children}</MainHeader>;
}

const MainHeader = styled('header')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'black',
  justifyContent: 'space-between',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '10vh',
  width: '100%',

  [`${media.medium}`]: {
    padding: '0.5vh 0',
    minHeight: '7vh',
  },
});

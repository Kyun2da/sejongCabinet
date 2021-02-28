import { Button, IconButton } from '@material-ui/core';
import { styled as mstyled } from '@material-ui/core/styles';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 10vh;
  width: 100vw;
`;

export const HelperButton = mstyled(IconButton)({
  left: '1.5vw',
  position: 'absolute',
  width: 'auto',
  fontSize: '3.0vw',
  color: 'white',
});

export const ShowPhotoButton = mstyled(Button)({
  backgroundColor: 'white',
  width: 'auto',
  fontFamily: 'Anton',
  fontSize: '1.2rem',
});

export const MainInfoWrapper = styled.div`
  position: absolute;
  right: 5vw;
  background-color: white;
  border-radius: 0.5rem;
  padding: 0.5vh 1vw;
  font-family: Noto Sans KR;
`;

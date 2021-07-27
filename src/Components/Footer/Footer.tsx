import { styled } from '@material-ui/core';
import media from '../../lib/styles/media';

export default function Footer() {
  return (
    <FooterContainer>
      Currently v2, © 2021.
      <LinkToProfile href="https://github.com/Kyun2da" target="_blank">
        Kyun2da
      </LinkToProfile>
      ,
      <LinkToProfile href="https://github.com/Jongminfire" target="_blank">
        Jongminfire
      </LinkToProfile>
    </FooterContainer>
  );
}

const FooterContainer = styled('p')({
  color: 'lightgray',
  position: 'absolute',
  bottom: 10,

  [`${media.xsmall}`]: {
    display: 'none',
  },
});

const LinkToProfile = styled('a')({
  textDecoration: 'none',
  color: 'lightgray',
  transition: 'all 0.5s ease-in-out',
  marginLeft: '0.3vw',

  '&:hover': {
    color: '#757575',
  },

  [`${media.medium}`]: {
    '&:hover': {
      color: 'lightgray',
    },
  },
});

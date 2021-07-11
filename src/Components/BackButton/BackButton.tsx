import { styled } from '@material-ui/core';
import { Link } from 'react-router-dom';
import backwards from '../../images/Backward.png';
import media from '../../lib/styles/media';

export default function BackButton() {
  return (
    <BackwardsContainer>
      <Link to="/main">
        <BackwardsImage src={backwards} alt="backwards" />
      </Link>
    </BackwardsContainer>
  );
}

const BackwardsContainer = styled('div')({
  margin: '0 0 0 2vw',
});

const BackwardsImage = styled('img')({
  width: '1.5vw',
  filter: 'invert(100%)',

  [`${media.medium}`]: {
    width: '1.2rem',
    marginLeft: '3vw',
  },
});

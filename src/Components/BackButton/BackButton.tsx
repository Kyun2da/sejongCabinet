import { styled } from '@material-ui/core';
import { Link } from 'react-router-dom';
import backwards from '../../images/Backward.png';

export default function BackButton() {
  return (
    <BackwardsContainer>
      <Link to="/main">
        <img
          src={backwards}
          alt="backwards"
          style={{
            width: '1.5vw',
            filter: 'invert(100%)',
          }}
        />
      </Link>
    </BackwardsContainer>
  );
}

const BackwardsContainer = styled('div')({
  margin: '0 0 0 2vw',
});

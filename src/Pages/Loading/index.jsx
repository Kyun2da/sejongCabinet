import React from 'react';
import { CircularProgress } from '@material-ui/core/';
import { Mobile, Default } from '../../MediaQuery';
import { CircularIconWrapper, LoadingPageContainer } from './styles';

const LoadingPage = () => {
  return (
    <LoadingPageContainer>
      <Mobile>
        <div style={{ marginTop: '50%' }}>
          <CircularProgress size="50vw" />
        </div>
      </Mobile>
      <Default>
        <CircularIconWrapper>
          <CircularProgress size="15vw" />
        </CircularIconWrapper>
      </Default>
    </LoadingPageContainer>
  );
};

export default LoadingPage;

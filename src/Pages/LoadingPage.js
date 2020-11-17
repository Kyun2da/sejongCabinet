import React from 'react';
import { CircularProgress } from '@material-ui/core/';
import { Mobile, Default } from '../MediaQuery';

const LoadingPage = () => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Mobile>
        <div style={{ marginTop: '50%' }}>
          <center>
            <CircularProgress size="50vw" />
          </center>
        </div>
      </Mobile>
      <Default>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'static',
            height: '100%',
          }}
        >
          <div style={{ marginTop: '30vh' }}>
            <CircularProgress size="15vw" />
          </div>
        </div>
      </Default>
    </div>
  );
};

export default LoadingPage;

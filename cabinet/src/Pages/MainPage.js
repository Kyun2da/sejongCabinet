import React, { useState } from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';
import {
  SwipeableDrawer,
  Button,
  Tabs,
  Tab,
  AppBar,
  TabPanel,
} from '@material-ui/core';
import Cabinet from './Cabinet';
import { Default, Mobile } from '../MediaQuery';
import test from '../image/Test.png';

const Container = styled.div`
  display: flex;
  justify-contents: center;
  align-items: center;
  flex-direction: column;
  height: 80%;
  width: 100%;
`;

const styles = {
  tabs: {
    height: '9vh',
  },

  tab: {
    opacity: '0.5',
    fontSize: '2vw',
    letterSpacing: '0.0001px',
    borderRadius: '10px',
    width: '15vw',
  },

  slide: {
    padding: 15,
    minHeight: 100,
  },
};

const MainPage = () => {
  const data = [
    {
      title: '001',
      width: 10,
      height: 6,
      row: [0, 0, 2, 1, 0, 1],
      column: [1, 1, 0, 0, 1, 0],
    },
    {
      title: '049',
      width: 10,
      height: 6,
      row: [0, 0, 2, 0, 0, 1],
      column: [1, 0, 0, 2, 1, 0, 0, 0, 2, 0],
    },
    {
      title: '061',
      width: 6,
      height: 6,
      row: [0, 0, 2, 0, 0, 1],
      column: [1, 2, 0, 0, 1, 0],
    },
    {
      title: '085',
      width: 10,
      height: 6,
      row: [0, 0, 2, 0, 0, 1],
      column: [1, 0, 0, 2, 1, 0, 2, 1, 0, 1],
    },
    {
      title: '145',
      width: 6,
      height: 6,
      row: [0, 0, 2, 0, 0, 1],
      column: [1, 0, 0, 2, 1, 0],
    },
  ];
  const cabinetSize = data.length;
  const [_map, visibleMap] = useState(false);
  const [index, setIndex] = useState(0);

  const handleChangeIndex = (value) => {
    setIndex(value);
  };

  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };

  const LoadTabs = () => {
    return data.map((i) => {
      return <Tab label={i.title} style={styles.tab} />;
    });
  };

  const showTabs = () => {
    return (
      <Tabs value={index} fullWidth onChange={handleChange} style={styles.tabs}>
        {LoadTabs()}
      </Tabs>
    );
  };

  const LoadContents = () => {
    return data.map((i) => {
      return <Cabinet data={i} />;
    });
  };

  const showContents = () => {
    return (
      <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
        {LoadContents()}
      </SwipeableViews>
    );
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Container>
        <header>
          <Button onClick={() => visibleMap(true)}>MAP 버튼</Button>
        </header>
        <SwipeableDrawer
          anchor="top"
          open={_map}
          onClick={() => visibleMap(false)}
        >
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10vh 0',
            }}
          >
            <img src={test} alt="map" width="1000vw" />
          </div>
        </SwipeableDrawer>
        <Default>
          <div style={{ width: '80%' }}>
            {showTabs()}
            {showContents()}
          </div>
        </Default>
        <Mobile>
          <div style={{ width: '100vw' }}>
            {showTabs()}
            {showContents()}
          </div>
        </Mobile>
      </Container>
    </div>
  );
};

export default MainPage;

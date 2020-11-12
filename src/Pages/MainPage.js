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
import { useHistory } from 'react-router-dom';
import Cabinet from './Cabinet';
import Logo from '../image/Logo.png';
import { Default, Mobile } from '../MediaQuery';
import test from '../image/Test.png';

const Container = styled.div`
  display: flex;
  justify-contents: center;
  align-items: center;
  flex-direction: column;
  margin-top: 9vh;
  height: 80%;
  width: 100%;
`;

const styles = {
  tabs: {
    height: '9vh',
  },

  tab_pc: {
    opacity: '0.5',
    fontSize: '2vw',
    letterSpacing: '0.0001px',
    borderRadius: '10px',
    fontFamily: 'Anton',
    width: '15vw',
  },

  tab_mobile: {
    opacity: '0.5',
    fontSize: '5vw',
    fontFamily: 'Anton',
    margin: '0',
    letterSpacing: '0.0001px',
    justifyContent: 'center',
    borderRadius: '10px',
    width: 'auto',
  },

  slide: {
    padding: 1,
    minHeight: 100,
  },
};

const MainPage = () => {
  const history = useHistory();
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

  const onClickLogout = () => {
    history.push('/');
  };

  const handleChangeIndex = (value) => {
    setIndex(value);
  };

  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };

  const LoadTabsPc = () => {
    return data.map((i) => {
      return <Tab label={i.title} style={styles.tab_pc} />;
    });
  };

  const showTabsPc = () => {
    return (
      <Tabs value={index} fullWidth onChange={handleChange} style={styles.tabs}>
        {LoadTabsPc()}
      </Tabs>
    );
  };

  const LoadTabsMobile = () => {
    return data.map((i) => {
      return <Tab label={i.title} style={styles.tab_mobile} />;
    });
  };

  const showTabsMobile = () => {
    return (
      <Tabs value={index} fullWidth onChange={handleChange} style={styles.tabs}>
        {LoadTabsMobile()}
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
      <SwipeableViews
        index={index}
        onChangeIndex={handleChangeIndex}
        style={{
          margin: '5vh 5vw',
          padding: '3vh 0 3vh 3vw',
          border: '0.5vh solid lightgray',
          borderRadius: '2vw',
        }}
      >
        {LoadContents()}
      </SwipeableViews>
    );
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Default>
        <header>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'black',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '10vh',
              width: '100%',
            }}
          >
            <div style={{ left: '2vw', position: 'fixed' }}>
              <img
                src={Logo}
                alt="logo"
                style={{
                  width: '3vw',
                  backgroundColor: 'white',
                }}
              />
            </div>
            <div style={{}}>
              <Button
                onClick={() => visibleMap(true)}
                style={{ backgroundColor: 'white', width: '5vw' }}
              >
                MAP
              </Button>
            </div>
            <div
              style={{
                position: 'fixed',
                right: '5vw',
                backgroundColor: 'white',
              }}
            >
              USER NAME
              <Button onClick={onClickLogout}>LOGOUT</Button>
            </div>
          </div>
        </header>
        <Container style={{ marginTop: '15vh' }}>
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {showTabsPc()}
            {showContents()}
          </div>
        </Container>
      </Default>
      <Mobile>
        <Container>hi</Container>
      </Mobile>
    </div>
  );
};

export default MainPage;

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
  withStyles,
} from '@material-ui/core';
import EjectIcon from '@material-ui/icons/Eject';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
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

  Mtabs: {
    height: '7vh',
  },

  tab_pc: {
    fontSize: '2vw',
    letterSpacing: '0.0001px',
    borderRadius: '10px',
    fontFamily: 'Anton',
    width: '15vw',
  },

  tab_mobile: {
    fontSize: '6vw',
    fontFamily: 'Anton',
    margin: '0',
    letterSpacing: '0.0001px',
    justifyContent: 'center',
    borderRadius: '10px',
    width: 'auto',
  },

  slide: {
    padding: '100rem',
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
      column: [1, 1, 1, 1, 1, 1],
    },
    {
      title: '085',
      width: 10,
      height: 6,
      row: [0, 0, 2, 0, 0, 1],
      column: [1, 0, 2, 2, 1, 0, 2, 1, 0, 1],
    },
    {
      title: '145',
      width: 6,
      height: 6,
      row: [0, 0, 2, 0, 0, 1],
      column: [0, 0, 0, 0, 0, 0],
    },
  ];
  const cabinetSize = data.length;
  const [_map, visibleMap] = useState(false);
  const [index, setIndex] = useState(0);
  const [select, setSelect] = useState('-');

  const onClickLogout = () => {
    history.push('/');
  };

  const handleChangeIndex = (value) => {
    setIndex(value);
  };

  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };

  const LoadTabs = () => {
    return data.map((i) => {
      return <Tab label={i.title} style={styles.tab_pc} />;
    });
  };

  const MLoadTabs = () => {
    return data.map((i) => {
      return <Tab label={i.title} style={styles.tab_mobile} />;
    });
  };

  const showTabs = () => {
    return (
      <Tabs
        value={index}
        fullWidth
        onChange={handleChange}
        style={styles.tabs}
        textColor="inherit"
        indicatorColor="primary"
        centered
      >
        {LoadTabs()}
      </Tabs>
    );
  };

  const MshowTabs = () => {
    return (
      <Tabs
        value={index}
        fullWidth
        onChange={handleChange}
        style={styles.Mtabs}
        textColor="inherit"
        indicatorColor="primary"
        centered
      >
        {MLoadTabs()}
      </Tabs>
    );
  };

  const LoadContents = () => {
    return data.map((i) => {
      return <Cabinet data={i} select={select} setSelect={setSelect} />;
    });
  };

  const MLoadContents = () => {
    return data.map((i) => {
      return <Cabinet data={i} select={select} setSelect={setSelect} />;
    });
  };

  const showContents = () => {
    return (
      <SwipeableViews
        index={index}
        onChangeIndex={handleChangeIndex}
        animateHeight="true"
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

  const MshowContents = () => {
    return (
      <SwipeableViews
        index={index}
        onChangeIndex={handleChangeIndex}
        animateHeight="true"
        style={{
          margin: '3vh 0',
          padding: '1vh 0',
          borderRadius: '2vw',
        }}
      >
        {MLoadContents()}
      </SwipeableViews>
    );
  };

  return (
    <div
      style={{ width: '100%', height: '100%' }}
      aria-hidden="true"
      onClick={() => setSelect('-')}
    >
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
            <div style={{ left: '2vw', position: 'absolute' }}>
              <img
                src={Logo}
                alt="logo"
                style={{
                  width: '3rem',
                  backgroundColor: 'white',
                }}
              />
            </div>
            <div>
              <Button
                onClick={() => visibleMap(true)}
                style={{ backgroundColor: 'white', width: '5vw' }}
              >
                <EjectIcon />
              </Button>
            </div>
            <div
              style={{
                position: 'absolute',
                right: '5vw',
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                padding: '0.5vh 1vw',
              }}
            >
              USER NAME
              <Button
                onClick={onClickLogout}
                style={{ backgroundColor: 'transparent', margin: '0 0 0 2vw' }}
                disableRipple
              >
                <PowerSettingsNewIcon />
              </Button>
            </div>
          </div>
        </header>
        <Container style={{ marginTop: '14vh' }}>
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
                backgroundColor: 'rgb(240,240,240)',
              }}
            >
              <img
                src={test}
                alt="map"
                width="800vw"
                style={{ backgroundColor: 'white' }}
              />
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
            {showTabs()}
            {showContents()}
          </div>
        </Container>
      </Default>
      <Mobile>
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
              height: '8vh',
              width: '100%',
              margin: 0,
              padding: 0,
            }}
          >
            <div style={{ left: '4vw', position: 'absolute' }}>
              <Button
                onClick={() => visibleMap(true)}
                style={{ backgroundColor: 'white', width: '3vw' }}
              >
                <EjectIcon />
              </Button>
            </div>

            <div
              style={{
                position: 'absolute',
                right: '4vw',
                backgroundColor: 'white',
                borderRadius: '1vw',
              }}
            >
              <Button
                onClick={onClickLogout}
                style={{ backgroundColor: 'transparent', width: '3vw' }}
                disableRipple
              >
                <PowerSettingsNewIcon />
              </Button>
            </div>
          </div>
        </header>
        <Container style={{ marginTop: '10vh' }}>
          <SwipeableDrawer
            anchor="top"
            open={_map}
            onClick={() => visibleMap(false)}
          >
            <div
              style={{
                position: 'static',
                width: '100%',
                height: 'auto',
                padding: '10vh 1rem',
                backgroundColor: 'RGB(245,245,245)',
              }}
            >
              <img
                src={test}
                alt="map"
                width="80%"
                style={{ backgroundColor: 'white' }}
              />
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
            {MshowTabs()}
            {MshowContents()}
          </div>
        </Container>
      </Mobile>
    </div>
  );
};

export default MainPage;

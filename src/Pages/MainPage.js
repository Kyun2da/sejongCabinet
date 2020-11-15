import React from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';
import { SwipeableDrawer, Button, Tabs, Tab } from '@material-ui/core';
import EjectIcon from '@material-ui/icons/Eject';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import PropTypes from 'prop-types';
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

const MainPage = (props) => {
  const {
    data,
    _map,
    visibleMap,
    index,
    handleChange,
    handleChangeIndex,
    select,
    setSelect,
    onClickLogout,
    currentUserName,
    cabinetNames,
  } = props;
  const LoadTabs = () => {
    return cabinetNames.map((i) => {
      return (
        <Tab
          key={data.currentCabinets[i].title}
          label={data.currentCabinets[i].title}
          style={styles.tab_pc}
        />
      );
    });
  };

  const MLoadTabs = () => {
    return cabinetNames.map((i) => {
      return (
        <Tab
          key={data.currentCabinets[i].title}
          label={data.currentCabinets[i].title}
          style={styles.tab_mobile}
        />
      );
    });
  };

  const showTabs = () => {
    return (
      <Tabs
        value={index}
        fullwidth="true"
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
        fullwidth="true"
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
    return cabinetNames.map((i) => {
      return (
        <Cabinet
          key={i}
          data={data.currentCabinets[i]}
          select={select}
          setSelect={setSelect}
        />
      );
    });
  };

  const MLoadContents = () => {
    return cabinetNames.map((i) => {
      return (
        <Cabinet
          key={i}
          data={data.currentCabinets[i]}
          select={select}
          setSelect={setSelect}
        />
      );
    });
  };

  const showContents = () => {
    return (
      <SwipeableViews
        index={index}
        onChangeIndex={handleChangeIndex}
        animateHeight
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
        animateHeight
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
      onClick={() => setSelect(-1)}
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
              {currentUserName}님 환영합니다!
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
            onClose={() => {}}
            onOpen={() => {}}
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
              height: '8vh',
              width: '100%',
              margin: 0,
              padding: 0,
            }}
          >
            <div style={{ left: '4vw', position: 'absolute' }}>
              <Button
                onClick={() => visibleMap(true)}
                style={{ backgroundColor: 'white', width: '2.5vw' }}
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
                style={{ backgroundColor: 'transparent', width: '2.5vw' }}
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
            onClose={() => {}}
            onOpen={() => {}}
          >
            <div
              style={{
                position: 'static',
                width: '100%',
                height: 'auto',
                padding: '10vh 5%',
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

MainPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleChangeIndex: PropTypes.func.isRequired,
  select: PropTypes.number.isRequired,
  setSelect: PropTypes.func.isRequired,
  _map: PropTypes.bool.isRequired,
  visibleMap: PropTypes.func.isRequired,
  onClickLogout: PropTypes.func.isRequired,
  currentUserName: PropTypes.string.isRequired,
  cabinetNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MainPage;

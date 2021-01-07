import React from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';
import {
  SwipeableDrawer,
  Button,
  Tabs,
  Tab,
  Menu,
  MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ImageIcon from '@material-ui/icons/Image';
import PropTypes from 'prop-types';
import Cabinet from '../Pages/Cabinet';
import { Mobile } from '../MediaQuery';
import SimpleModal from '../Pages/SimpleModal';

const Container = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  margin-top: 10vh;
  height: 100%;
  width: 100%;
`;

const styles = {
  Mtabs: {
    height: '7vh',
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

const MainPageMobile = (props) => {
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
    onClickUserPage,
    onClickAdminPage,
    cabinetNames,
    cabinetEnroll,
    currentUserID,
    cabinetCancel,
    adminType,
    cabinetBreakDown,
    cabinetFix,
    mapImage,
    cabinetImage,
  } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [toggleHelp, setToggleHelp] = React.useState(false);
  const handleOpen = () => {
    setToggleHelp(!toggleHelp);
  };
  const drawlerHandler = () => {
    return (
      <div>
        <Mobile>
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
                padding: '5vh 5%',
                backgroundColor: 'RGB(245,245,245)',
              }}
            >
              <img
                src={mapImage}
                alt="map"
                width="90%"
                style={{ backgroundColor: 'white' }}
              />
              <img
                src={cabinetImage}
                alt="cabinetpicture"
                width="90%"
                style={{
                  margin: '5vh 0',
                  padding: '0.1rem',
                  backgroundColor: 'white',
                }}
              />
            </div>
          </SwipeableDrawer>
        </Mobile>
      </div>
    );
  };

  const handleClose = () => {
    setAnchorEl(null);
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

  const MshowTabs = () => {
    return (
      <Tabs
        value={index}
        onChange={handleChange}
        style={styles.Mtabs}
        textColor="inherit"
        indicatorColor="primary"
        disabled="true"
        centered
      >
        {MLoadTabs()}
      </Tabs>
    );
  };

  const MLoadContents = () => {
    return cabinetNames.map((i) => {
      return (
        <Cabinet
          key={i}
          cabinetNum={i}
          data={data.currentCabinets[i]}
          select={select}
          setSelect={setSelect}
          cabinetEnroll={cabinetEnroll}
          currentUserID={currentUserID}
          cabinetCancel={cabinetCancel}
          adminType={adminType}
          cabinetBreakDown={cabinetBreakDown}
          cabinetFix={cabinetFix}
        />
      );
    });
  };

  const MshowContents = () => {
    return (
      <SwipeableViews
        index={index}
        onChangeIndex={handleChangeIndex}
        disabled="true"
        animateHeight
        style={{
          margin: '3vh 0',
          padding: '1vh 0',
          borderRadius: '2vw',
          width: '100vw',
        }}
      >
        {MLoadContents()}
      </SwipeableViews>
    );
  };

  return (
    <div aria-hidden="true" onClick={() => setSelect(-1)}>
      <Mobile>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            height: '8vh',
            width: '100vw',
            minHeight: '40px',
            backgroundColor: 'black',
            margin: 0,
            padding: 0,
          }}
        >
          <div style={{ left: '4vw', position: 'absolute' }}>
            <Button
              onClick={() => visibleMap(true)}
              style={{
                backgroundColor: 'white',
                width: '2.5vw',
                height: '5vh',
                minHeight: '30px',
                fontFamily: 'Anton',
              }}
            >
              <ImageIcon />
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
              onClick={handleClick}
              style={{
                backgroundColor: 'transparent',
                width: '2.5vw',
                height: '5vh',
                minHeight: '30px',
              }}
              disableRipple
            >
              <MenuIcon />
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              transformOrigin={{ vertical: 'top', horizontal: 'center' }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {adminType ? (
                <MenuItem
                  onClick={onClickAdminPage}
                  style={{ fontFamily: 'Noto Sans KR' }}
                >
                  관리자페이지
                </MenuItem>
              ) : (
                <MenuItem
                  onClick={onClickUserPage}
                  style={{ fontFamily: 'Noto Sans KR' }}
                >
                  마이페이지
                </MenuItem>
              )}
              <MenuItem
                onClick={handleOpen}
                style={{ fontFamily: 'Noto Sans KR' }}
              >
                도움말
              </MenuItem>
              <MenuItem
                onClick={onClickLogout}
                style={{ fontFamily: 'Noto Sans KR' }}
              >
                로그아웃
              </MenuItem>
            </Menu>
          </div>
        </div>
        {drawlerHandler()}
        <Container>
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
          <SimpleModal open={toggleHelp} setOpen={handleOpen} />
        </Container>
      </Mobile>
    </div>
  );
};

MainPageMobile.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleChangeIndex: PropTypes.func.isRequired,
  select: PropTypes.number.isRequired,
  setSelect: PropTypes.func.isRequired,
  _map: PropTypes.bool.isRequired,
  visibleMap: PropTypes.func.isRequired,
  onClickLogout: PropTypes.func.isRequired,
  onClickUserPage: PropTypes.func.isRequired,
  onClickAdminPage: PropTypes.func.isRequired,
  cabinetNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  cabinetEnroll: PropTypes.func.isRequired,
  currentUserID: PropTypes.string.isRequired,
  cabinetCancel: PropTypes.func.isRequired,
  adminType: PropTypes.bool.isRequired,
  cabinetBreakDown: PropTypes.func.isRequired,
  cabinetFix: PropTypes.func.isRequired,
  mapImage: PropTypes.string.isRequired,
  cabinetImage: PropTypes.string.isRequired,
};

export default MainPageMobile;

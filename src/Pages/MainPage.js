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
  IconButton,
  Tooltip,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ImageIcon from '@material-ui/icons/Image';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import PropTypes from 'prop-types';
import Cabinet from './Cabinet';
import { Default, Mobile } from '../MediaQuery';
import SimpleModal from './SimpleModal';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 12vh;
  height: 80%;
  width: 100%;
`;

const styles = {
  tabs: {
    height: '9vh',
  },

  tab_pc: {
    fontSize: '2vw',
    letterSpacing: '0.0001px',
    borderRadius: '10px',
    fontFamily: 'Anton',
    width: '15vw',
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
    onClickUserPage,
    onClickAdminPage,
    currentUserName,
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
        <Default>
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
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                padding: '10vh 0',
                backgroundColor: 'rgb(240,240,240)',
                rowGpa: '10vw',
              }}
            >
              <img
                src={mapImage}
                alt="map"
                // width="700vw"
                width="50%"
                style={{ backgroundColor: 'white' }}
              />
              <img
                src={cabinetImage}
                alt="cabinetpicture"
                // width="500vw"
                width="30%"
                style={{ padding: '1rem', backgroundColor: 'white' }}
              />
            </div>
          </SwipeableDrawer>
        </Default>
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

  const LoadContents = () => {
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

  const showContents = () => {
    return (
      <SwipeableViews
        index={index}
        onChangeIndex={handleChangeIndex}
        animateHeight
        style={{
          margin: '5vh 5vw',
          padding: '3vh 0 2vh 3vw',
          border: '0.5vh solid lightgray',
          borderRadius: '2vw',
        }}
      >
        {LoadContents()}
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
              width: '100vw',
            }}
          >
            <Tooltip
              title={<div style={{ fontSize: '1vw' }}>도움말</div>}
              placement="bottom"
              arrow
            >
              <IconButton
                aria-label="delete"
                style={{
                  left: '1.5vw',
                  position: 'absolute',
                  width: 'auto',
                  fontSize: '3.0vw',
                  color: 'white',
                }}
                onClick={handleOpen}
              >
                <HelpOutlineIcon
                  style={{
                    fontSize: '3.0vw',
                  }}
                />
              </IconButton>
            </Tooltip>
            <div>
              <Tooltip
                title={<div style={{ fontSize: '1vw' }}>실제 사진 보기</div>}
                placement="bottom"
                arrow
              >
                <Button
                  onClick={() => visibleMap(true)}
                  style={{
                    backgroundColor: 'white',
                    width: 'auto',
                    fontFamily: 'Anton',
                    fontSize: '1.2rem',
                  }}
                >
                  photo
                  <ImageIcon style={{ fontSize: '2vw', marginLeft: '0.5vw' }} />
                </Button>
              </Tooltip>
            </div>
            <div
              style={{
                position: 'absolute',
                right: '5vw',
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                padding: '0.5vh 1vw',
                fontFamily: 'Noto Sans KR',
              }}
            >
              {currentUserName}님 환영합니다!
              <Button
                onClick={handleClick}
                style={{ backgroundColor: 'transparent', margin: '0 0 0 2vw' }}
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
                  onClick={onClickLogout}
                  style={{ fontFamily: 'Noto Sans KR' }}
                >
                  로그아웃
                </MenuItem>
              </Menu>
            </div>
          </div>
        </header>
        <Container>
          {drawlerHandler()}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            {showTabs()}
            {showContents()}
          </div>
        </Container>
        <SimpleModal open={toggleHelp} setOpen={handleOpen} />
      </Default>
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
  onClickUserPage: PropTypes.func.isRequired,
  onClickAdminPage: PropTypes.func.isRequired,
  currentUserName: PropTypes.string.isRequired,
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

export default MainPage;

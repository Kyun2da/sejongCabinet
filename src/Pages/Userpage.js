import React from 'react';
import styled from 'styled-components';
import {
  SwipeableDrawer,
  Button,
  FormControl,
  TextField,
  makeStyles,
} from '@material-ui/core';
import EjectIcon from '@material-ui/icons/Eject';
import { Link } from 'react-router-dom';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import Logo from '../image/Logo.png';
import { Default, Mobile } from '../MediaQuery';
import test from '../image/Test.png';
import cabinetpicture from '../image/Cabinet.jpg';

const Container = styled.div`
  display: flex;
  justify-contents: center;
  align-items: center;
  flex-direction: column;
  margin-top: 9vh;
  height: 80%;
  width: 100%;
`;

const UserpageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5vw;
  font-weight: bold;
  padding: 1vh 0 2vh;
  border-bottom: 1px solid RGB(200, 200, 200);
`;

const MUserpageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6vw;
  font-weight: bold;
  padding: 1vh 0 0.5vh;
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

  input1: {
    height: '1vh',
  },
};

const useStyles = makeStyles((theme) => ({
  cancleButton: {
    fontFamily: 'Noto Sans KR',
    fontWeight: 'bold',
    backgroundColor: 'red',
    color: 'white',
    opacity: 0.6,
    padding: '0.5vh 1vw',
    borderRadius: '0.5vw',
    '&:hover': {
      backgroundColor: 'red',
      opacity: 1,
    },
  },

  McancleButton: {
    fontFamily: 'Noto Sans KR',
    fontWeight: 'bold',
    backgroundColor: 'red',
    opacity: 0.6,
    color: 'white',
    borderRadius: '2vw',
    '&:hover': {
      backgroundColor: 'red',
      opacity: 1,
    },
  },

  changeButton: {
    fontFamily: 'Noto Sans KR',
    fontWeight: 'bold',
    backgroundColor: 'rgb(180,180,180)',
    color: 'white',
    width: '25vw',
    height: '6vh',
    borderRadius: '0.5vw',
    margin: '1vh 0',
    '&:hover': {
      backgroundColor: 'rgb(150,150,150)',
    },
  },

  MchangeButton: {
    fontFamily: 'Noto Sans KR',
    fontWeight: 'bold',
    backgroundColor: 'rgb(180,180,180)',
    color: 'white',
    width: '60vw',
    height: '5vh',
    borderRadius: '3vw',
    margin: '1vh 0',
    '&:hover': {
      backgroundColor: 'rgb(150,150,150)',
    },
  },
}));

const UserPage = (props) => {
  const {
    _map,
    visibleMap,
    onClickLogout,
    currentUserName,
    currentUserCabinetIdx,
    currentUserCabinetTitle,
    cabinetCancel,
    updatePW,
  } = props;
  const classes = useStyles();
  const [currentPassword, setCurrent] = React.useState('');
  const [changePassword, setChange] = React.useState('');
  const [confirmPassword, setConfirm] = React.useState('');
  const cabinetTitle = ['001', '049', '061', '085', '145'];

  const currnetPasswordHandler = (e) => {
    setCurrent(e.target.value);
  };

  const changePasswordHandler = (e) => {
    setChange(e.target.value);
  };

  const confirmPasswordHandler = (e) => {
    setConfirm(e.target.value);
  };

  const comparePassword = () => {
    if (changePassword === confirmPassword) {
      return true;
    }
    return false;
  };

  const passwordChangeFunc = () => {
    updatePW(currentPassword, changePassword, confirmPassword);
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
            <div style={{ left: '2vw', position: 'absolute' }}>
              <Link to="/main">
                <img
                  src={Logo}
                  alt="logo"
                  style={{
                    width: '3rem',
                    backgroundColor: 'white',
                  }}
                />
              </Link>
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
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                padding: '10vh 0',
                backgroundColor: 'rgb(240,240,240)',
                rowGpa: '10vw',
              }}
            >
              <img
                src={test}
                alt="map"
                width="700vw"
                style={{ backgroundColor: 'white' }}
              />
              <img
                src={cabinetpicture}
                alt="cabinetpicture"
                width="500vw"
                style={{ padding: '1rem', backgroundColor: 'white' }}
              />
            </div>
          </SwipeableDrawer>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '3px solid lightgray',
              borderRadius: '2vw',
              width: '40vw',
              height: '75vh',
              padding: '2vh 0',
              columnGap: '2vh',
            }}
          >
            <div
              style={{
                flexGrow: 1,
                width: '80%',
              }}
            >
              <UserpageTitle>나의 사물함</UserpageTitle>
              <div
                style={{
                  height: 'auto',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    display: 'flex',
                    margin: '4vh 0 5vh',
                    fontSize: '2vw',
                    flexDirection: 'row',
                  }}
                >
                  <div>
                    {currentUserCabinetTitle !== 0
                      ? `사물함위치 : ${
                          cabinetTitle[
                            // eslint-disable-next-line radix
                            parseInt(
                              currentUserCabinetTitle.substr(
                                currentUserCabinetTitle.length - 1,
                              ),
                            ) - 1
                          ]
                        } -
                    ${currentUserCabinetIdx}번 사물함`
                      : `예약된 사물함이 없습니다.`}
                  </div>
                  <Button
                    className={classes.cancleButton}
                    onClick={cabinetCancel}
                  >
                    취소
                  </Button>
                </div>
              </div>
            </div>
            <div style={{ flexGrow: 2, width: '80%' }}>
              <UserpageTitle>비밀번호 변경</UserpageTitle>
              <div
                style={{
                  height: 'auto',
                  overflow: 'hidden',
                  margin: '2vh 0',
                }}
              >
                <FormControl>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      marginTop: '1vh',
                      width: '100%',
                    }}
                  >
                    <center>
                      <TextField
                        label="현재 비밀번호"
                        variant="outlined"
                        onChange={currnetPasswordHandler}
                        style={{ width: '25vw', margin: '1.5vh 0' }}
                      />
                      <TextField
                        label="변경 비밀번호"
                        variant="outlined"
                        onChange={changePasswordHandler}
                        style={{ width: '25vw', margin: '1.5vh 0' }}
                      />
                      <TextField
                        label="비밀번호 확인"
                        variant="outlined"
                        onChange={confirmPasswordHandler}
                        style={{ width: '25vw', margin: '1.5vh 0' }}
                      />
                    </center>
                    <Button
                      className={classes.changeButton}
                      onClick={passwordChangeFunc}
                    >
                      변경하기
                    </Button>
                  </div>
                </FormControl>
              </div>
            </div>
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
                padding: '5vh 5%',
                backgroundColor: 'RGB(245,245,245)',
              }}
            >
              <img
                src={test}
                alt="map"
                width="90%"
                style={{ backgroundColor: 'white' }}
              />
              <img
                src={cabinetpicture}
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '5px solid lightgray',
              borderRadius: '6vw',
              width: '80%',
              height: '75vh',
              margin: '2vh 0',
              padding: '3vh 0 5vh',
            }}
          >
            <div
              style={{
                flexGrow: 1,
                width: '80%',
              }}
            >
              <MUserpageTitle>사물함위치</MUserpageTitle>
              <div
                style={{
                  height: 'auto',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    alignItems: 'center',
                    display: 'flex',
                    margin: '4vh 0 1vh',
                    paddingBottom: '5vh',
                    fontSize: '1.5rem',
                    flexDirection: 'column',
                    borderBottom: '1px solid gray',
                  }}
                >
                  <div style={{ marginBottom: '3vh' }}>
                    {currentUserCabinetTitle !== 0
                      ? `사물함위치 : ${
                          cabinetTitle[
                            // eslint-disable-next-line radix
                            parseInt(
                              currentUserCabinetTitle.substr(
                                currentUserCabinetTitle.length - 1,
                              ),
                            ) - 1
                          ]
                        } -
                    ${currentUserCabinetIdx}번 사물함`
                      : `예약된 사물함이 없습니다.`}
                  </div>
                  <Button
                    className={classes.McancleButton}
                    onClick={cabinetCancel}
                  >
                    취소
                  </Button>
                </div>
              </div>
            </div>
            <div style={{ flexGrow: 2, width: '80%' }}>
              <MUserpageTitle>비밀번호 변경</MUserpageTitle>
              <div
                style={{
                  height: 'auto',
                  overflow: 'hidden',
                  margin: '2vh 0',
                }}
              >
                <FormControl>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      marginTop: '1vh',
                      width: '100%',
                    }}
                  >
                    <center>
                      <TextField
                        id="currentpassword"
                        label="현재 비밀번호"
                        variant="outlined"
                        onChange={currnetPasswordHandler}
                        margin="dense"
                        style={{
                          width: '95%',
                          margin: '1.5vh 0',
                        }}
                      />
                      <TextField
                        id="changepassword"
                        label="변경 비밀번호"
                        variant="outlined"
                        margin="dense"
                        onChange={changePasswordHandler}
                        style={{
                          width: '95%',
                          margin: '1.5vh 0',
                        }}
                      />
                      <TextField
                        id="confirmpassword"
                        label="비밀번호 확인"
                        variant="outlined"
                        margin="dense"
                        onChange={confirmPasswordHandler}
                        style={{
                          width: '95%',
                          margin: '1.5vh 0',
                        }}
                      />
                    </center>
                    <Button
                      className={classes.MchangeButton}
                      onClick={passwordChangeFunc}
                    >
                      변경하기
                    </Button>
                  </div>
                </FormControl>
              </div>
            </div>
          </div>
        </Container>
      </Mobile>
    </div>
  );
};

UserPage.propTypes = {
  _map: PropTypes.bool.isRequired,
  visibleMap: PropTypes.func.isRequired,
  onClickLogout: PropTypes.func.isRequired,
  currentUserName: PropTypes.string.isRequired,
  currentUserCabinetIdx: PropTypes.number.isRequired,
  currentUserCabinetTitle: PropTypes.string.isRequired,
  cabinetCancel: PropTypes.func.isRequired,
  updatePW: PropTypes.func.isRequired,
};

export default UserPage;

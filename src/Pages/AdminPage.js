import React from 'react';
import styled from 'styled-components';
import {
  Button,
  FormControl,
  TextField,
  makeStyles,
  Menu,
  MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Default, Mobile } from '../MediaQuery';
import backwards from '../image/Backward.png';

const Container = styled.div`
  display: flex;
  justify-contents: center;
  align-items: center;
  flex-direction: column;
  margin-top: 9vh;
  height: 80%;
  width: 100%;
`;

const AdminpageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5vw;
  font-weight: bold;
  padding: 1vh 0 2vh;
  border-bottom: 1px solid RGB(200, 200, 200);
`;

const MAdminpageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6vw;
  font-weight: bold;
  padding: 1vh 0 0.5vh;
`;

const useStyles = makeStyles(() => ({
  cancleButton: {
    fontFamily: 'Noto Sans KR',
    fontWeight: 'bold',
    backgroundColor: 'red',
    color: 'white',
    opacity: 0.6,
    padding: '0.5vh 2vw',
    margin: '3vh 0 0',
    borderRadius: '0.5vw',
    '&:hover': {
      backgroundColor: 'red',
      opacity: 1,
    },
  },

  McancleButton: {
    fontFamily: 'Noto Sans KR',
    backgroundColor: 'red',
    opacity: 0.6,
    fontSize: '0.5rem',
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

const AdminPage = (props) => {
  const {
    onClickLogout,
    currentUserName,
    updatePW,
    total,
    serverStatus,
    toggleServer,
  } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  const [currentPassword, setCurrent] = React.useState('');
  const [changePassword, setChange] = React.useState('');
  const [confirmPassword, setConfirm] = React.useState('');

  const currnetPasswordHandler = (e) => {
    setCurrent(e.target.value);
  };

  const changePasswordHandler = (e) => {
    setChange(e.target.value);
  };

  const confirmPasswordHandler = (e) => {
    setConfirm(e.target.value);
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
                  src={backwards}
                  alt="backwards"
                  style={{
                    width: '1.5vw',
                    filter: 'invert(100%)',
                  }}
                />
              </Link>
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
        <Container style={{ marginTop: '14vh' }}>
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
              <AdminpageTitle style={{ fontFamily: 'Noto Sans KR' }}>
                관리자 페이지
              </AdminpageTitle>
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
                    margin: '4vh 0 2vh',
                    fontSize: '2vw',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ fontFamily: 'Noto Sans KR' }}>
                    현재 예약된 사물함 수 : {total}개
                  </div>
                  <center>
                    <Button
                      className={classes.cancleButton}
                      onClick={toggleServer}
                      style={{ fontFamily: 'Noto Sans KR' }}
                    >
                      {serverStatus?.status?.status ? '서버 닫기' : '서버 열기'}
                    </Button>
                  </center>
                </div>
              </div>
            </div>
            <div style={{ flexGrow: 2, width: '80%' }}>
              <AdminpageTitle>비밀번호 변경</AdminpageTitle>
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
              <Link to="/main">
                <img
                  src={backwards}
                  alt="backwards"
                  style={{
                    width: '5vw',
                    filter: 'invert(100%)',
                  }}
                />
              </Link>
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
                style={{ backgroundColor: 'transparent' }}
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
        <Container style={{ marginTop: '10vh' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '5px solid lightgray',
              borderRadius: '6vw',
              width: '80%',
              height: '50%',
              margin: '2vh 0',
              padding: '3vh 0 4vh',
            }}
          >
            <div
              style={{
                flexGrow: 1,
                width: '80%',
              }}
            >
              <MAdminpageTitle>관리자 페이지</MAdminpageTitle>
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
                    paddingBottom: '3vh',
                    fontSize: '1.2rem',
                    flexDirection: 'column',
                    borderBottom: '1px solid gray',
                  }}
                >
                  <div
                    style={{ marginBottom: '1vh', fontFamily: 'Noto Sans KR' }}
                  >
                    현재 예약된 사물함 수 : {total}개
                    <center>
                      <Button
                        className={classes.McancleButton}
                        onClick={toggleServer}
                        style={{ marginTop: '3vh' }}
                      >
                        {serverStatus?.status?.status
                          ? '서버 닫기'
                          : '서버 열기'}
                      </Button>
                    </center>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ flexGrow: 2, width: '80%' }}>
              <MAdminpageTitle>비밀번호 변경</MAdminpageTitle>
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
                          margin: '2vh 0',
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
                          margin: '2vh 0',
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

AdminPage.propTypes = {
  onClickLogout: PropTypes.func.isRequired,
  currentUserName: PropTypes.string.isRequired,
  updatePW: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  serverStatus: PropTypes.objectOf.isRequired,
  toggleServer: PropTypes.func.isRequired,
};

export default AdminPage;

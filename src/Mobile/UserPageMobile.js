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
import { Mobile } from '../MediaQuery';
import backwards from '../image/Backward.png';
import { useSelector } from 'react-redux';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 9vh;
  height: 80%;
  width: 100%;
`;

const MUserpageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6vw;
  font-weight: bold;
  padding: 1vh 0 0.5vh;
`;

const useStyles = makeStyles(() => ({
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

const UserPageMobile = (props) => {
  const { onClickLogout, cabinetCancel, updatePW } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const currentUserCabinetTitle = useSelector(
    (state) => state.auth.cabinetTitle,
  );
  const currentUserCabinetIdx = useSelector((state) => state.auth.cabinetIdx);

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

  const passwordChangeFunc = async () => {
    await updatePW(currentPassword, changePassword, confirmPassword);
    setCurrent('');
    setChange('');
    setConfirm('');
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
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
              <MUserpageTitle style={{ fontFamily: 'Noto Sans KR' }}>
                사물함위치
              </MUserpageTitle>
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
                    fontSize: '1.2rem',
                    flexDirection: 'column',
                    borderBottom: '1px solid gray',
                  }}
                >
                  <div
                    style={{ marginBottom: '3vh', fontFamily: 'Noto Sans KR' }}
                  >
                    {currentUserCabinetTitle && currentUserCabinetTitle !== 0
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
                  {currentUserCabinetTitle !== 0 ? (
                    <Button
                      className={classes.McancleButton}
                      onClick={cabinetCancel}
                      disabled={currentUserCabinetTitle === 0}
                    >
                      취소
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
            <div style={{ flexGrow: 2, width: '80%' }}>
              <MUserpageTitle style={{ fontFamily: 'Noto Sans KR' }}>
                비밀번호 변경
              </MUserpageTitle>
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
                        type="password"
                        value={currentPassword}
                        onChange={currnetPasswordHandler}
                        placeholder="현재 비밀번호를 입력해주세요."
                        margin="dense"
                        style={{
                          width: '60vw',
                          margin: '1vh 0',
                        }}
                      />
                      <TextField
                        id="changepassword"
                        label="변경 비밀번호"
                        variant="outlined"
                        margin="dense"
                        type="password"
                        value={changePassword}
                        placeholder="6글자 이상의 비밀번호를 입력해주세요."
                        onChange={changePasswordHandler}
                        style={{
                          width: '60vw',
                          margin: '1vh 0',
                        }}
                      />
                      <TextField
                        id="confirmpassword"
                        label="비밀번호 확인"
                        variant="outlined"
                        margin="dense"
                        type="password"
                        value={confirmPassword}
                        placeholder="위와 동일한 6글자 이상의 비밀번호를 입력해주세요."
                        onChange={confirmPasswordHandler}
                        style={{
                          width: '60vw',
                          margin: '1vh 0',
                        }}
                      />
                    </center>
                    <Button
                      className={classes.MchangeButton}
                      onClick={passwordChangeFunc}
                      style={{
                        fontFamily: 'Noto Sans KR',
                        backgroundColor: 'rgb(63,81,181)',
                        color: 'white',
                      }}
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

UserPageMobile.propTypes = {
  onClickLogout: PropTypes.func.isRequired,
  cabinetCancel: PropTypes.func.isRequired,
  updatePW: PropTypes.func.isRequired,
};

export default UserPageMobile;

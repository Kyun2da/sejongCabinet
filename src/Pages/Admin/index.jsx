import React from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import backwards from '../../image/Backward.png';
import { Default } from '../../MediaQuery';
import {
  AdminContainer,
  AdminFormControl,
  AdminHeader,
  AdminTabWrapper,
  AdminFormTitle,
  BackArrowWrapper,
  useStyles,
  AdminTextField,
  AdminUtilityWrapper,
} from './styles';

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
    <Default>
      <AdminHeader>
        <BackArrowWrapper>
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
        </BackArrowWrapper>
        <AdminTabWrapper>
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
        </AdminTabWrapper>
      </AdminHeader>
      <AdminContainer>
        <AdminFormTitle>관리자 페이지</AdminFormTitle>
        <AdminUtilityWrapper>
          현재 예약된 사물함 수 : {total}개
          <Button className={classes.cancleButton} onClick={toggleServer}>
            {serverStatus?.status?.status ? '서버 닫기' : '서버 열기'}
          </Button>
        </AdminUtilityWrapper>
        <AdminFormTitle>비밀번호 변경</AdminFormTitle>
        <AdminFormControl>
          <AdminTextField
            label="현재 비밀번호"
            variant="outlined"
            onChange={currnetPasswordHandler}
          />
          <AdminTextField
            label="변경 비밀번호"
            variant="outlined"
            onChange={changePasswordHandler}
          />
          <AdminTextField
            label="비밀번호 확인"
            variant="outlined"
            onChange={confirmPasswordHandler}
          />
          <Button className={classes.changeButton} onClick={passwordChangeFunc}>
            변경하기
          </Button>
        </AdminFormControl>
      </AdminContainer>
    </Default>
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

import { Button, Menu, MenuItem } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import backwards from '../../image/Backward.png';
import {
  UserPageHeaderContainer,
  BackwardsContainer,
  AdminTabContainer,
} from './styles';

const UserPageHeader = (props) => {
  const { onClickLogout } = props;
  const currentUserName = useSelector((state) => state.auth.currentUserName);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <UserPageHeaderContainer>
      <BackwardsContainer>
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
      </BackwardsContainer>
      <AdminTabContainer>
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
      </AdminTabContainer>
    </UserPageHeaderContainer>
  );
};

export default UserPageHeader;

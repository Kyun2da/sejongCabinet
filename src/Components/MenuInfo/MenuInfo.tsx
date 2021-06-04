import { styled, Menu, MenuItem, Button } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { auth, database } from '../../config/firebase.config';
import { useHistory, useLocation } from 'react-router';
import useAuthState from '../../hooks/useAuthState';
import { useObject } from '../../hooks/useObject';
import { useAppSelector, useUserSelector } from '../../redux/hooks';

export default function MenuInfo() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { name } = useAppSelector(useUserSelector);
  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);
  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  }, []);
  const onClickLogout = useCallback(() => {
    auth.signOut();
  }, []);

  const onClickBugReport = useCallback(() => {
    window.location.href = 'mailto:sjswcabinet@gmail.com';
  }, []);

  return (
    <MenuContainer>
      {`${name ?? '익명'}님 환영합니다!`}
      <HamburgerButton onClick={handleClick} disableRipple>
        <MenuIcon />
      </HamburgerButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <PageMenuItem />
        <MenuItem onClick={onClickBugReport}>버그 신고</MenuItem>
        <MenuItem onClick={onClickLogout}>로그아웃</MenuItem>
      </Menu>
    </MenuContainer>
  );
}

const PageMenuItem = React.forwardRef<any, any>((props, ref) => {
  const location = useLocation();
  const [user, authLoading, authError] = useAuthState(auth);
  const history = useHistory();
  const [userInfo, userInfoLoading, userInfoError] = useObject(
    database.ref(`users/${user?.uid}`),
  );
  const goMyPage = () => {
    history.push('/userpage');
  };

  const goMainPage = () => {
    history.push('/main');
  };

  const goAdminPage = () => {
    history.push('/adminpage');
  };
  switch (location.pathname) {
    case '/main':
      if (userInfo?.val().adminType === 1) {
        return (
          <MenuItem ref={ref} {...props} onClick={goAdminPage}>
            관리자 페이지
          </MenuItem>
        );
      } else {
        return (
          <MenuItem ref={ref} {...props} onClick={goMyPage}>
            마이 페이지
          </MenuItem>
        );
      }
    case '/admin':
      return (
        <MenuItem ref={ref} {...props} onClick={goMainPage}>
          메인 페이지
        </MenuItem>
      );
    case '/':
      return (
        <MenuItem ref={ref} {...props} onClick={goMainPage}>
          메인 페이지
        </MenuItem>
      );
    default:
      return null;
  }
});

const MenuContainer = styled('div')({
  position: 'absolute',
  right: '5vw',
  backgroundColor: 'white',
  borderRadius: '0.5rem',
  padding: '0.5vh 1vw',
});

const HamburgerButton = styled(Button)({
  backgroundColor: 'transparent',
  margin: '0 0 0 2vw',
});

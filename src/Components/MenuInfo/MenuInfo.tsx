import { styled, Menu, MenuItem, Button } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { auth, database } from '../../config/firebase.config';
import { useHistory, useLocation } from 'react-router';
import useAuthState from '../../hooks/useAuthState';
import { useObject } from '../../hooks/useObject';
import { useAppSelector, useUserSelector } from '../../redux/hooks';
import { useMediaQuery } from 'react-responsive';
import media from '../../lib/styles/media';

type MenuInfoProps = {
  openHelpModal?: React.MouseEventHandler<HTMLLIElement>;
};

export default function MenuInfo({ openHelpModal }: MenuInfoProps) {
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

  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  return (
    <MenuContainer>
      {isMobile ? '' : `${name ?? '익명'}님 환영합니다!`}
      <HamburgerButton onClick={handleClick} disableRipple>
        <MenuIcon />
      </HamburgerButton>
      <MenuItems
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <PageMenuItem />
        {isMobile ? <MenuItem onClick={openHelpModal}>도움말</MenuItem> : null}
        <MenuItem onClick={onClickBugReport}>버그 신고</MenuItem>
        <MenuItem onClick={onClickLogout}>로그아웃</MenuItem>
      </MenuItems>
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
  backgroundColor: 'white',
  borderRadius: '0.5rem',
  padding: '0.5vh 1vw',
  margin: '0 2vw 0 0',

  [`${media.medium}`]: {
    marginRight: '5vw',
  },
});

const HamburgerButton = styled(Button)({
  backgroundColor: 'transparent',
});

const MenuItems = styled(Menu)({
  transform: 'translateY(3rem)',
});

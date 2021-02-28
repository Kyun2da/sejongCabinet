import { Button, IconButton, Menu, MenuItem, Tooltip } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ImageIcon from '@material-ui/icons/Image';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {
  HeaderContainer,
  HelperButton,
  MainInfoWrapper,
  ShowPhotoButton,
} from './styles';

const MainHeader = (props) => {
  const {
    visibleMap,
    onClickLogout,
    onClickUserPage,
    onClickAdminPage,
    currentUserName,
    adminType,
    handleOpen,
  } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      <HeaderContainer>
        <Tooltip
          title={<div style={{ fontSize: '1vw' }}>도움말</div>}
          placement="bottom"
          arrow
        >
          <HelperButton aria-label="delete" onClick={handleOpen}>
            <HelpOutlineIcon
              style={{
                fontSize: '3.0vw',
              }}
            />
          </HelperButton>
        </Tooltip>
        <Tooltip
          title={<div style={{ fontSize: '1vw' }}>실제 사진 보기</div>}
          placement="bottom"
          arrow
        >
          <ShowPhotoButton onClick={() => visibleMap(true)}>
            photo
            <ImageIcon style={{ fontSize: '2vw', marginLeft: '0.5vw' }} />
          </ShowPhotoButton>
        </Tooltip>
        <MainInfoWrapper>
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
        </MainInfoWrapper>
      </HeaderContainer>
    </header>
  );
};

export default MainHeader;

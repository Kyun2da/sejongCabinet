import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import {
  UserPageContainer,
  UserpageTitle,
  useStyles,
  UserPageFormContainer,
  CurrentCabinetStatus,
  FormControlWrapper,
  UserPageTextField,
} from './styles';
import UserPageHeader from '../../Components/UserPageHeader';
import { useSelector } from 'react-redux';

const UserPage = (props) => {
  const { onClickLogout, cabinetCancel, updatePW } = props;
  const classes = useStyles();
  const [currentPassword, setCurrent] = React.useState('');
  const [changePassword, setChange] = React.useState('');
  const [confirmPassword, setConfirm] = React.useState('');
  const cabinetTitle = ['001', '049', '061', '085', '145'];
  const currentUserCabinetTitle = useSelector(
    (state) => state.auth.cabinetTitle,
  );
  const currentUserCabinetIdx = useSelector((state) => state.auth.cabinetIdx);

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
    <UserPageContainer>
      <UserPageHeader onClickLogout={onClickLogout} />
      <UserPageFormContainer>
        <UserpageTitle style={{ fontFamily: 'Noto Sans KR' }}>
          나의 사물함
        </UserpageTitle>
        <CurrentCabinetStatus>
          {currentUserCabinetTitle && currentUserCabinetTitle !== 0
            ? `사물함위치 : ${
                cabinetTitle[
                  parseInt(
                    currentUserCabinetTitle.substr(
                      currentUserCabinetTitle.length - 1,
                    ),
                  ) - 1
                ]
              } -
                    ${currentUserCabinetIdx}번 사물함`
            : `예약된 사물함이 없습니다.`}
          {currentUserCabinetTitle !== 0 ? (
            <Button
              className={classes.cancleButton}
              onClick={cabinetCancel}
              style={{
                fontFamily: 'Noto Sans KR',
              }}
            >
              취소
            </Button>
          ) : null}
        </CurrentCabinetStatus>
        <UserpageTitle>비밀번호 변경</UserpageTitle>
        <FormControlWrapper>
          <UserPageTextField
            label="현재 비밀번호"
            variant="outlined"
            value={currentPassword}
            onChange={currnetPasswordHandler}
            placeholder="현재 비밀번호를 입력해주세요."
            type="password"
          />
          <UserPageTextField
            label="변경 비밀번호"
            variant="outlined"
            type="password"
            value={changePassword}
            placeholder="6글자 이상의 비밀번호를 입력해주세요."
            onChange={changePasswordHandler}
          />
          <UserPageTextField
            label="비밀번호 확인"
            variant="outlined"
            type="password"
            value={confirmPassword}
            placeholder="위와 동일한 6글자 이상의 비밀번호를 입력해주세요."
            onChange={confirmPasswordHandler}
          />
          <Button className={classes.changeButton} onClick={passwordChangeFunc}>
            변경하기
          </Button>
        </FormControlWrapper>
      </UserPageFormContainer>
    </UserPageContainer>
  );
};

UserPage.propTypes = {
  onClickLogout: PropTypes.func.isRequired,
  cabinetCancel: PropTypes.func.isRequired,
  updatePW: PropTypes.func.isRequired,
};

export default UserPage;

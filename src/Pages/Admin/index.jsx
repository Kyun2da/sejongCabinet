import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Default } from '../../MediaQuery';
import {
  AdminContainer,
  AdminFormControl,
  AdminFormTitle,
  useStyles,
  AdminTextField,
  AdminUtilityWrapper,
} from './styles';
import UserPageHeader from '../../Components/UserPageHeader';

const AdminPage = (props) => {
  const { onClickLogout, updatePW, total, serverStatus, toggleServer } = props;
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
      <UserPageHeader onClickLogout={onClickLogout} />
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
  updatePW: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  serverStatus: PropTypes.objectOf.isRequired,
  toggleServer: PropTypes.func.isRequired,
};

export default AdminPage;

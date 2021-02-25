import firebase from 'firebase/app';
import getFirebaseErrorMessage from '../error/auth/authError';
import customSwal from '../alert/swal';

const { auth } = require('../../configs/firebase.config');

const updatePassword = (currentPW, newPW, confirmPW) => {
  if (newPW !== confirmPW) {
    customSwal(
      'error',
      '비밀번호 변경 실패',
      '비밀번호 확인이 일치하지 않습니다.',
    );
    return;
  }
  const user = auth.currentUser;
  const credential = firebase.auth.EmailAuthProvider.credential(
    user.email,
    currentPW,
  );
  user
    .reauthenticateWithCredential(credential)
    .then(() => {
      user
        .updatePassword(newPW)
        .then(() => {
          customSwal(
            'success',
            '비밀번호 변경 성공',
            '비밀번호가 성공적으로 변경되었습니다!',
          );
        })
        .catch((error) => {
          customSwal(
            'error',
            '비밀번호 변경 실패',
            getFirebaseErrorMessage(error.code),
          );
        });
    })
    .catch(() => {
      customSwal(
        'error',
        '비밀번호 변경 실패',
        '현재 비밀번호가 일치하지 않습니다.',
      );
    });
};

export default updatePassword;

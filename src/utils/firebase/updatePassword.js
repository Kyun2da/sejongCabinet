import Swal from 'sweetalert2';

import firebase from 'firebase/app';
import getFirebaseErrorMessage from '../error/auth/authError';

const { auth } = require('../../configs/firebase.config');

const updatePassword = (currentPW, newPW, confirmPW) => {
  if (newPW !== confirmPW) {
    return Swal.fire({
      icon: 'error',
      text: '비밀번호 확인이 일치하지 않습니다.',
      showConfirmButton: false,
      width: 'auto',
      fontSize: '2rem',
      timer: 1500,
    });
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
          Swal.fire({
            icon: 'success',
            title: '비밀번호 변경 성공',
            text: `비밀번호가 성공적으로 변경되었습니다!`,
            showConfirmButton: true,
            width: '25rem',
            timer: 5000,
          });
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: '비밀번호 변경 실패',
            text: getFirebaseErrorMessage(error.code),
            showConfirmButton: true,
            width: '25rem',
            timer: 5000,
          });
        });
    })
    .catch(() => {
      return Swal.fire({
        icon: 'error',
        text: '현재 비밀번호가 일치하지 않습니다.',
        showConfirmButton: false,
        width: 'auto',
        fontSize: '2rem',
        timer: 1500,
      });
    });
};

export default updatePassword;

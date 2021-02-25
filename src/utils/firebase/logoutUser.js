import { clearCurrentUser } from '../../redux/auth/auth.reducer';
import customSwal from '../alert/swal';

const { auth } = require('../../configs/firebase.config');

const logOutUser = (history) => {
  auth
    .signOut()
    .then(() => {
      clearCurrentUser();
      history.push('/');
    })
    .catch(() =>
      customSwal(
        'error',
        '로그아웃 에러',
        '로그아웃을 시도하던 중에 알 수 없는 에러가 발생하였습니다.',
      ),
    );
};

export default logOutUser;

import Swal from 'sweetalert2';
import { clearCurrentUser } from '../../redux/auth/auth.reducer';

const { auth } = require('../../configs/firebase.config');

const logOutUser = (history) => {
  auth
    .signOut()
    .then(() => {
      clearCurrentUser();
      history.push('/');
    })
    .catch(() => {
      return Swal.fire({
        icon: 'error',
        text: '로그아웃을 시도하던 중에 알 수 없는 에러가 발생하였습니다.',
        showConfirmButton: false,
        width: 'auto',
        fontSize: '2rem',
        timer: 1500,
      });
    });
};

export default logOutUser;

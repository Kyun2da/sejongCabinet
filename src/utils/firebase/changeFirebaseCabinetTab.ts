import { database } from '../../config/firebase.config';
import customSwal from '../alert';

export default function changeFirebaseCabinetTab(
  cabinetNum: number,
  cabinetTitle: string,
  cabinetWidth: number,
  cabinetHeight: number,
  isSizeDiffrent: boolean,
) {
  if (isSizeDiffrent) {
    customSwal(
      'warning',
      '사물함 초기화 필요',
      '넓이와 높이를 바꾸기 위해서는 현재 등록된 사물함탭이 전부 예약가능 상태로 초기화 됩니다. 정말 사물함을 초기화 하시겠습니까?',
      true,
    ).then((result) => {
      if (result.isConfirmed) {
        console.log('사물함 초기화');
      }
    });
  } else {
    // 사물함 제목만 변경
    database.ref(`cabinet/${cabinetNum}/title`).set(cabinetTitle);
  }
}

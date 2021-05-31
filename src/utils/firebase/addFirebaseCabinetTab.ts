import { CabinetItemType } from './../../redux/cabinet/cabinetSlice';
import { database } from '../../config/firebase.config';
import customSwal from '../alert';
import { store } from '../../redux/store';

export default function addFirebaseCabinetTab(
  cabinetTitle: string,
  cabinetWidth: number,
  cabinetHeight: number,
) {
  customSwal(
    'warning',
    '새로운 사물함 탭 생성',
    '정말로 사물함 탭을 생성하시겠습니까?',
    true,
  ).then((result) => {
    if (result.isConfirmed) {
      const itemObject: CabinetItemType[] = [];
      for (let i = 0; i < cabinetWidth * cabinetHeight; i += 1) {
        itemObject.push({ status: 0 });
      }
      const cabinetCount = store.getState().cabinet.cabinet?.length;
      const newCabinetTab = {
        title: cabinetTitle,
        width: cabinetWidth,
        height: cabinetHeight,
        item: itemObject,
      };
      database.ref(`cabinet/${cabinetCount}`).update(newCabinetTab);
    }
  });
}

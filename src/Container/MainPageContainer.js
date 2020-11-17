import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { database } from '../configs/firebase.config';
import LoadingPage from '../Pages/LoadingPage';
import MainPage from '../Pages/MainPage';
import writeUserData from '../utils/firebase/writeUserData';

const MainPageContainer = () => {
  const history = useHistory();
  const data = useSelector((state) => state.cabinet.currentCabinets);
  const currentUserID = useSelector((state) => state.auth.currentUserID);
  const currentUserName = useSelector((state) => state.auth.currentUserName);
  const userId = useSelector((state) => state.auth.currentUser.uid);
  const userCabinetIdx = useSelector((state) => state.auth.cabinetIdx);
  const userCabinetTitle = useSelector((state) => state.auth.cabinetTitle);
  const cabinetNames = [
    'cabinet1',
    'cabinet2',
    'cabinet3',
    'cabinet4',
    'cabinet5',
  ];
  const [_map, visibleMap] = useState(false);
  const [index, setIndex] = useState(0);
  const [select, setSelect] = useState(-1);

  const onClickLogout = () => {
    history.push('/');
  };

  const handleChangeIndex = (value) => {
    setIndex(value);
  };

  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };

  const cancelCabinet = () => {
    database
      .ref(`cabinet/${userCabinetTitle}/item/${userCabinetIdx}`)
      .transaction(
        (cabinet) => {
          if (cabinet === currentUserID) {
            return 0;
          }
          // eslint-disable-next-line no-useless-return
          return;
        },
        (error, committed) => {
          if (error) {
            Swal.fire({
              icon: 'error',
              title: '사물함 취소 에러',
              text: `관리자에게 문의해 주세요.`,
              showConfirmButton: true,
              width: '25rem',
              timer: 5000,
            });
          } else if (!committed) {
            Swal.fire({
              icon: 'error',
              title: '사물함 취소 실패',
              text: `취소가 불가능합니다.`,
              showConfirmButton: true,
              width: '25rem',
              timer: 5000,
            });
          } else {
            writeUserData(userId, currentUserName, currentUserID, 0, 0);
            Swal.fire({
              icon: 'success',
              title: '사물함 취소 성공',
              text: `${currentUserName}님이 신청했던 ${select}번 사물함이 취소되었습니다`,
              showConfirmButton: true,
              width: '25rem',
              timer: 5000,
            });
          }
        },
      );
  };

  const enrollCabinet = (cabinetTitle) => {
    if (userCabinetTitle === 0 && userCabinetIdx === 0) {
      database.ref(`cabinet/${cabinetTitle}/item/${select}`).transaction(
        (cabinet) => {
          if (cabinet === 0) {
            return currentUserID;
          }
          // eslint-disable-next-line no-useless-return
          return;
        },
        (error, committed, snapshot) => {
          if (error) {
            Swal.fire({
              icon: 'error',
              title: '사물함 신청 에러',
              text: `관리자에게 문의해 주세요.`,
              showConfirmButton: true,
              width: '25rem',
              timer: 5000,
            });
          } else if (!committed) {
            Swal.fire({
              icon: 'error',
              title: '사물함 신청 실패',
              text: `이미 신청한 사람이 있거나 신청이 불가능합니다.`,
              showConfirmButton: true,
              width: '25rem',
              timer: 5000,
            });
          } else {
            writeUserData(
              userId,
              currentUserName,
              currentUserID,
              cabinetTitle,
              select,
            );
            Swal.fire({
              icon: 'success',
              title: '사물함 신청 성공',
              text: `${select}번 사물함이 ${snapshot.val()}학번으로 신청되었습니다`,
              showConfirmButton: true,
              width: '25rem',
              timer: 5000,
            });
          }
        },
      );
    } else {
      Swal.fire({
        icon: 'question',
        title: '사물함 신청을 취소하시겠습니까?',
        html:
          '사물함을 신청하기 위해선 현재 등록된 사물함을 취소해야합니다.<br/>' +
          '정말 사물함을 취소하시겠습니까?',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: '예',
        cancelButtonText: '아니오',
        width: '50rem',
      }).then((result) => {
        if (result.isConfirmed) {
          cancelCabinet();
        }
      });
    }
  };
  const cabinetEnroll = (title) => {
    enrollCabinet(title);
  };

  const cabinetCancel = (title) => {
    cancelCabinet(title);
  };
  return (
    <>
      {data ? (
        <MainPage
          data={data}
          _map={_map}
          visibleMap={visibleMap}
          index={index}
          select={select}
          setSelect={setSelect}
          onClickLogout={onClickLogout}
          handleChangeIndex={handleChangeIndex}
          handleChange={handleChange}
          currentUserName={currentUserName}
          cabinetNames={cabinetNames}
          cabinetEnroll={cabinetEnroll}
          currentUserID={currentUserID}
          cabinetCancel={cabinetCancel}
        />
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default MainPageContainer;

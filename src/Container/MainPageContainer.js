import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { database } from '../configs/firebase.config';
import LoadingPage from '../Pages/LoadingPage';
import MainPage from '../Pages/MainPage';

const MainPageContainer = () => {
  const history = useHistory();
  const data = useSelector((state) => state.cabinet.currentCabinets);
  const currentUserID = useSelector((state) => state.auth.currentUserID);
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
  const currentUserName = useSelector((state) => state.auth.currentUserName);
  const onClickLogout = () => {
    history.push('/');
  };

  const handleChangeIndex = (value) => {
    setIndex(value);
  };

  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };
  const enrollCabinet = (cabinetTitle) => {
    const updates = {};
    updates[`cabinet/${cabinetTitle}/item/${select}`] = currentUserID;
    database.ref(`cabinet/${cabinetTitle}`).transaction((cabinet) => {
      database.ref().update(updates);
    });
  };
  const cancelCabinet = (cabinetTitle) => {
    const updates = {};
    updates[`cabinet/${cabinetTitle}/item/${select}`] = 0;
    database.ref(`cabinet/${cabinetTitle}`).transaction((cabinet) => {
      database.ref().update(updates);
    });
  };
  const cabinetEnroll = (title) => {
    enrollCabinet(title);
    Swal.fire({
      icon: 'success',
      title: '사물함 신청 성공',
      text: `${title}의 ${select}번 사물함으로 신청되었습니다`,
      showConfirmButton: true,
      width: '25rem',
      timer: 2000,
    });
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

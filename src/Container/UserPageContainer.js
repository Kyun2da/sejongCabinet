import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { database } from '../configs/firebase.config';
import LoadingPage from '../Pages/LoadingPage';
import Userpage from '../Pages/Userpage';

const UserPageContainer = () => {
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

  return (
    <>
      {data ? (
        <Userpage
          data={data}
          _map={_map}
          visibleMap={visibleMap}
          index={index}
          select={select}
          setSelect={setSelect}
          onClickLogout={onClickLogout}
          currentUserName={currentUserName}
          cabinetNames={cabinetNames}
          currentUserID={currentUserID}
        />
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default UserPageContainer;

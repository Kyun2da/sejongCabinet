import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AdminPage from '../Pages/AdminPage';
import LoadingPage from '../Pages/LoadingPage';
import logOutUser from '../utils/firebase/logoutUser';
import updatePassword from '../utils/firebase/updatePassword';

const AdminPageContainer = () => {
  const data = useSelector((state) => state.cabinet.currentCabinets);
  const history = useHistory();
  const currentUserCabinetNum = useSelector((state) => state.auth.cabinetTitle);
  const currentUserCabinetIdx = useSelector((state) => state.auth.cabinetIdx);
  const currentUserName = useSelector((state) => state.auth.currentUserName);
  const userId = useSelector((state) => state.auth.currentUser.uid);
  const [_map, visibleMap] = useState(false);

  const onClickLogout = () => {
    logOutUser(history);
  };

  const toLoginPage = () => {
    history.push('/');
  };

  const updatePW = (currentPW, newPW, confirmPW) => {
    updatePassword(currentPW, newPW, confirmPW);
  };
  return (
    <>
      {userId ? (
        <>
          {data ? (
            <AdminPage
              _map={_map}
              visibleMap={visibleMap}
              onClickLogout={onClickLogout}
              currentUserName={currentUserName}
              currentUserCabinetIdx={currentUserCabinetIdx}
              currentUserCabinetTitle={currentUserCabinetNum}
              updatePW={updatePW}
            />
          ) : (
            <LoadingPage />
          )}
        </>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default AdminPageContainer;

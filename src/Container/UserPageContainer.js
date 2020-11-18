import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoadingPage from '../Pages/LoadingPage';
import Userpage from '../Pages/Userpage';
import cancelCabinet from '../utils/firebase/cancelCabinet';

const UserPageContainer = () => {
  const data = useSelector((state) => state.cabinet.currentCabinets);
  const history = useHistory();
  const currentUserCabinetNum = useSelector((state) => state.auth.cabinetTitle);
  const currentUserCabinetIdx = useSelector((state) => state.auth.cabinetIdx);
  const currentUserName = useSelector((state) => state.auth.currentUserName);
  const currentUserID = useSelector((state) => state.auth.currentUserID);
  const userId = useSelector((state) => state.auth.currentUser.uid);
  const [_map, visibleMap] = useState(false);

  const onClickLogout = () => {
    history.push('/');
  };

  const cabinetCancel = () => {
    cancelCabinet(
      currentUserCabinetNum,
      currentUserCabinetIdx,
      currentUserID,
      userId,
      currentUserName,
    );
  };
  return (
    <>
      {data ? (
        <Userpage
          _map={_map}
          visibleMap={visibleMap}
          onClickLogout={onClickLogout}
          currentUserName={currentUserName}
          currentUserCabinetIdx={currentUserCabinetIdx}
          currentUserCabinetTitle={currentUserCabinetNum}
          cabinetCancel={cabinetCancel}
        />
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default UserPageContainer;

import React, { useEffect, useState } from 'react';
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
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let count = 0;
    if (data.currentCabinets) {
      Object.keys(data.currentCabinets).forEach((key) => {
        Object.keys(data.currentCabinets[key].item).forEach((keys) => {
          if (
            data.currentCabinets[key].item[keys] !== 0 &&
            data.currentCabinets[key].item[keys] !== 2
          ) {
            count += 1;
          }
        });
      });
    }
    setTotal(count);
  }, [data]);
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
              total={total}
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

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Mobile, Default } from '../MediaQuery';
import AdminPage from '../Pages/AdminPage';
import AdminPageMobile from '../Mobile/AdminPageMobile';
import LoadingPage from '../Pages/LoadingPage';
import logOutUser from '../utils/firebase/logoutUser';
import toggleServerStatus from '../utils/firebase/setServerStatus';
import updatePassword from '../utils/firebase/updatePassword';

const AdminPageContainer = () => {
  const data = useSelector((state) => state.cabinet.currentCabinets);
  const history = useHistory();
  const currentUserCabinetNum = useSelector((state) => state.auth.cabinetTitle);
  const currentUserCabinetIdx = useSelector((state) => state.auth.cabinetIdx);
  const currentUserName = useSelector((state) => state.auth.currentUserName);
  const userId = useSelector((state) => state.auth.currentUser.uid);
  const [_map, visibleMap] = useState(false);
  const serverStatus = useSelector((state) => state.server);
  const onClickLogout = () => {
    logOutUser(history);
  };
  const updatePW = (currentPW, newPW, confirmPW) => {
    updatePassword(currentPW, newPW, confirmPW);
  };
  const [total, setTotal] = useState(0);
  const toggleServer = () => {
    toggleServerStatus();
  };
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
            <>
              <Default>
                <AdminPage
                  _map={_map}
                  visibleMap={visibleMap}
                  onClickLogout={onClickLogout}
                  currentUserName={currentUserName}
                  currentUserCabinetIdx={currentUserCabinetIdx}
                  currentUserCabinetTitle={currentUserCabinetNum}
                  updatePW={updatePW}
                  total={total}
                  serverStatus={serverStatus}
                  toggleServer={toggleServer}
                />
              </Default>
              <Mobile>
                <AdminPageMobile
                  _map={_map}
                  visibleMap={visibleMap}
                  onClickLogout={onClickLogout}
                  currentUserName={currentUserName}
                  currentUserCabinetIdx={currentUserCabinetIdx}
                  currentUserCabinetTitle={currentUserCabinetNum}
                  updatePW={updatePW}
                  total={total}
                  serverStatus={serverStatus}
                  toggleServer={toggleServer}
                />
              </Mobile>
            </>
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

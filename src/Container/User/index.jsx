import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import UserpageMobile from '../../Mobile/UserPageMobile';
import cancelCabinet from '../../utils/firebase/cancelCabinet';
import logOutUser from '../../utils/firebase/logoutUser';
import updatePassword from '../../utils/firebase/updatePassword';
import { Default, Mobile } from '../../MediaQuery';
import UserPage from '../../Pages/User';
import LoadingPage from '../../Pages/Loading';

const UserPageContainer = () => {
  const data = useSelector((state) => state.cabinet.currentCabinets);
  const history = useHistory();
  const currentUserCabinetNum = useSelector((state) => state.auth.cabinetTitle);
  const currentUserCabinetIdx = useSelector((state) => state.auth.cabinetIdx);
  const currentUserName = useSelector((state) => state.auth.currentUserName);
  const currentUserID = useSelector((state) => state.auth.currentUserID);
  const userId = useSelector((state) => state.auth.currentUser.uid);

  const onClickLogout = useCallback(() => {
    logOutUser(history);
  }, [history]);

  const cabinetCancel = useCallback(() => {
    cancelCabinet(
      currentUserCabinetNum,
      currentUserCabinetIdx,
      currentUserID,
      userId,
      currentUserName,
    );
  }, [
    currentUserCabinetNum,
    currentUserCabinetIdx,
    currentUserID,
    userId,
    currentUserName,
  ]);

  const updatePW = useCallback((currentPW, newPW, confirmPW) => {
    updatePassword(currentPW, newPW, confirmPW);
  }, []);

  return (
    <>
      {userId && data ? (
        <>
          <Default>
            <UserPage
              onClickLogout={onClickLogout}
              cabinetCancel={cabinetCancel}
              updatePW={updatePW}
            />
          </Default>
          <Mobile>
            <UserpageMobile
              onClickLogout={onClickLogout}
              cabinetCancel={cabinetCancel}
              updatePW={updatePW}
            />
          </Mobile>
        </>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default UserPageContainer;

import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoadingPage from '../../Pages/LoadingPage';
import UserpageMobile from '../../Mobile/UserPageMobile';
import cancelCabinet from '../../utils/firebase/cancelCabinet';
import logOutUser from '../../utils/firebase/logoutUser';
import updatePassword from '../../utils/firebase/updatePassword';
import { Default, Mobile } from '../../MediaQuery';
import UserPage from '../../Pages/User';

const UserPageContainer = () => {
  const data = useSelector((state) => state.cabinet.currentCabinets);
  const history = useHistory();
  const currentUserCabinetNum = useSelector((state) => state.auth.cabinetTitle);
  const currentUserCabinetIdx = useSelector((state) => state.auth.cabinetIdx);
  const currentUserName = useSelector((state) => state.auth.currentUserName);
  const currentUserID = useSelector((state) => state.auth.currentUserID);
  const userId = useSelector((state) => state.auth.currentUser.uid);

  const onClickLogout = () => {
    logOutUser(history);
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

  const updatePW = (currentPW, newPW, confirmPW) => {
    updatePassword(currentPW, newPW, confirmPW);
  };
  return (
    <>
      {userId ? (
        <>
          {data ? (
            <>
              <Default>
                <UserPage
                  onClickLogout={onClickLogout}
                  currentUserName={currentUserName}
                  currentUserCabinetIdx={currentUserCabinetIdx}
                  currentUserCabinetTitle={currentUserCabinetNum}
                  cabinetCancel={cabinetCancel}
                  updatePW={updatePW}
                />
              </Default>
              <Mobile>
                <UserpageMobile
                  onClickLogout={onClickLogout}
                  currentUserCabinetIdx={currentUserCabinetIdx}
                  currentUserCabinetTitle={currentUserCabinetNum}
                  cabinetCancel={cabinetCancel}
                  updatePW={updatePW}
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

export default UserPageContainer;

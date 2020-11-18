import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoadingPage from '../Pages/LoadingPage';
import MainPage from '../Pages/MainPage';
import cancelCabinet from '../utils/firebase/cancelCabinet';
import enrollCabinet from '../utils/firebase/enrollCabinet';
import logOutUser from '../utils/firebase/logoutUser';

const MainPageContainer = () => {
  const history = useHistory();
  const data = useSelector((state) => state.cabinet.currentCabinets);
  const currentUserID = useSelector((state) => state.auth.currentUserID);
  const currentUserName = useSelector((state) => state.auth.currentUserName);
  const userId = useSelector((state) => state.auth.currentUser.uid);
  const userCabinetIdx = useSelector((state) => state.auth.cabinetIdx);
  const userCabinetTitle = useSelector((state) => state.auth.cabinetTitle);
  const serverStatus = useSelector((state) => state.server.status);
  console.log(serverStatus);
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

  const onClickUserPage = () => {
    history.push('/userpage');
  };
  const onClickLogout = () => {
    logOutUser(history);
  };

  const handleChangeIndex = (value) => {
    setIndex(value);
  };

  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };

  const toLoginPage = () => {
    history.push('/');
  };

  const cabinetEnroll = (title) => {
    enrollCabinet(
      title,
      userCabinetTitle,
      userCabinetIdx,
      select,
      currentUserID,
      userId,
      currentUserName,
    );
  };

  const cabinetCancel = () => {
    cancelCabinet(
      userCabinetTitle,
      userCabinetIdx,
      currentUserID,
      userId,
      currentUserName,
    );
  };
  return (
    <>
      {data ? (
        <>
          {userId ? (
            <>
              {serverStatus.status ? (
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
                  onClickUserPage={onClickUserPage}
                />
              ) : (
                <div>관리자가 서버를 열어야합니다.</div>
              )}
            </>
          ) : (
            toLoginPage()
          )}
        </>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default MainPageContainer;

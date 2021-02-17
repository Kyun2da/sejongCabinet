import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Mobile, Default } from '../MediaQuery';
import ServerLoadingPage from '../Pages/ServerLoadingPage';
import LoadingPage from '../Pages/LoadingPage';
import MainPage from '../Pages/MainPage';
import MainPageMobile from '../Mobile/MainPageMobile';
import breakDownCabinet from '../utils/firebase/breakDownCabinet';
import cancelCabinet from '../utils/firebase/cancelCabinet';
import enrollCabinet from '../utils/firebase/enrollCabinet';
import fixCabinet from '../utils/firebase/fixCabinet';
import logOutUser from '../utils/firebase/logoutUser';
import Cabinet001 from '../image/Cabinet001.png';
import Cabinet049 from '../image/Cabinet049.png';
import Cabinet061 from '../image/Cabinet061.png';
import Cabinet085 from '../image/Cabinet085.png';
import Cabinet145 from '../image/Cabinet145.png';
import Cabinet6x6 from '../image/Cabinet6x6.jpg';
import Cabinet6x10 from '../image/Cabinet6x10.jpg';

const MainPageContainer = () => {
  const history = useHistory();
  const data = useSelector((state) => state.cabinet.currentCabinets);
  const currentUserID = useSelector((state) => state.auth.currentUserID);
  const currentUserName = useSelector((state) => state.auth.currentUserName);
  const userId = useSelector((state) => state.auth.currentUser.uid);
  const userCabinetIdx = useSelector((state) => state.auth.cabinetIdx);
  const userCabinetTitle = useSelector((state) => state.auth.cabinetTitle);
  const serverStatus = useSelector((state) => state.server);
  const adminType = useSelector((state) => state.auth.adminType);
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
  const [mapImage, setMapImage] = React.useState(null);
  const [cabinetImage, setCabinetImage] = React.useState(null);

  const imageChange = () => {
    if (index === 0) {
      setMapImage(Cabinet001);
      setCabinetImage(Cabinet6x6);
    } else if (index === 1) {
      setMapImage(Cabinet049);
      setCabinetImage(Cabinet6x10);
    } else if (index === 2) {
      setMapImage(Cabinet061);
      setCabinetImage(Cabinet6x6);
    } else if (index === 3) {
      setMapImage(Cabinet085);
      setCabinetImage(Cabinet6x10);
    } else if (index === 4) {
      setMapImage(Cabinet145);
      setCabinetImage(Cabinet6x6);
    }
  };

  useEffect(() => {
    imageChange();
  }, [index]);

  const onClickUserPage = () => {
    history.push('/userpage');
  };

  const onClickAdminPage = () => {
    history.push('/adminpage');
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

  const cabinetBreakDown = (title) => {
    breakDownCabinet(title, select);
  };

  const cabinetFix = (title) => {
    fixCabinet(title, select);
  };
  return (
    <>
      {data ? (
        <>
          {userId ? (
            <>
              {serverStatus?.status?.status || adminType ? (
                <>
                  <Default>
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
                      onClickAdminPage={onClickAdminPage}
                      adminType={adminType}
                      cabinetBreakDown={cabinetBreakDown}
                      cabinetFix={cabinetFix}
                      mapImage={mapImage}
                      cabinetImage={cabinetImage}
                    />
                  </Default>
                  <Mobile>
                    <MainPageMobile
                      data={data}
                      _map={_map}
                      visibleMap={visibleMap}
                      index={index}
                      select={select}
                      setSelect={setSelect}
                      onClickLogout={onClickLogout}
                      handleChangeIndex={handleChangeIndex}
                      handleChange={handleChange}
                      cabinetNames={cabinetNames}
                      cabinetEnroll={cabinetEnroll}
                      currentUserID={currentUserID}
                      cabinetCancel={cabinetCancel}
                      onClickUserPage={onClickUserPage}
                      onClickAdminPage={onClickAdminPage}
                      adminType={adminType}
                      cabinetBreakDown={cabinetBreakDown}
                      cabinetFix={cabinetFix}
                      mapImage={mapImage}
                      cabinetImage={cabinetImage}
                    />
                  </Mobile>
                </>
              ) : (
                <div>
                  <ServerLoadingPage />
                </div>
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

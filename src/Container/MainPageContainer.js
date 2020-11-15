import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoadingPage from '../Pages/LoadingPage';
import MainPage from '../Pages/MainPage';

const MainPageContainer = () => {
  const history = useHistory();
  const data = useSelector((state) => state.cabinet.currentCabinets);
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
        />
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default MainPageContainer;

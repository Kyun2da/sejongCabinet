import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import MainPage from '../Pages/MainPage';

const MainPageContainer = () => {
  const history = useHistory();
  const data = [
    {
      title: '001',
      width: 10,
      height: 6,
      row: [0, 0, 2, 1, 0, 1],
      column: [1, 1, 0, 0, 1, 0],
    },
    {
      title: '049',
      width: 10,
      height: 6,
      row: [0, 0, 2, 0, 0, 1],
      column: [1, 0, 0, 2, 1, 0, 0, 0, 2, 0],
    },
    {
      title: '061',
      width: 6,
      height: 6,
      row: [0, 0, 2, 0, 0, 1],
      column: [1, 1, 1, 1, 1, 1],
    },
    {
      title: '085',
      width: 10,
      height: 6,
      row: [0, 0, 2, 0, 0, 1],
      column: [1, 0, 2, 2, 1, 0, 2, 1, 0, 1],
    },
    {
      title: '145',
      width: 6,
      height: 6,
      row: [0, 0, 2, 0, 0, 1],
      column: [0, 0, 0, 0, 0, 0],
    },
  ];
  const [_map, visibleMap] = useState(false);
  const [index, setIndex] = useState(0);
  const [select, setSelect] = useState('-');

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
      />
    </>
  );
};

export default MainPageContainer;

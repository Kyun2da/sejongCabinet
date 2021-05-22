import React from 'react';
import Header from '../../Components/Header';
import { useAppSelector } from '../../redux/hooks';

export type MainPageProps = {};

function MainPage({}: MainPageProps) {
  const uuid = useAppSelector((state) => state.users.uuid);
  return (
    <>
      <Header></Header>
      {uuid}
    </>
  );
}

export default MainPage;

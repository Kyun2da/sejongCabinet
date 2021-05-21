import React from 'react';
import { useAppSelector } from '../../redux/hooks';

export type MainPageProps = {};

function MainPage({}: MainPageProps) {
  const uuid = useAppSelector((state) => state.users.uuid);
  return <>{uuid}</>;
}

export default MainPage;

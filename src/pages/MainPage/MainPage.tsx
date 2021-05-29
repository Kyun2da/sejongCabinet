import React, { useState } from 'react';
import Header from '../../Components/Header';
import HelperButton from '../../Components/HelperButton';
import HelperModal from '../../Components/HelperModal';
import MenuInfo from '../../Components/MenuInfo';
import AppLayout from '../../Components/AppLayout';
import Cabinet from '../../Components/Cabinet';
import { Redirect } from 'react-router-dom';
import { useAppSelector, useUserSelector } from '../../redux/hooks';

export type MainPageProps = {};

let data: any = {
  currentCabinets: [
    { width: 10, height: 10, title: 'CAB-A', item: {} },
    { width: 10, height: 50, title: 'CAB-B', item: {} },
    { width: 3, height: 3, title: 'CAB-C', item: {} },
    { width: 6, height: 6, title: 'CAB-D', item: {} },
    { width: 10, height: 6, title: 'CAB-E', item: {} },
    { width: 12, height: 6, title: 'CAB-F', item: {} },
    { width: 13, height: 6, title: 'CAB-G', item: {} },
  ],
};

const makeRandomStudentID = () => {
  let temp = '1';

  for (let i = 0; i < 7; i++) {
    temp += Math.floor(Math.random() * 9);
  }

  return temp;
};

const createRandomUser = (data: any) => {
  data.currentCabinets.forEach((v: any) => {
    for (let i = 0; i < v.width * v.height; i++) {
      v.item[i] = {
        status: Math.floor(Math.random() * 3),
        studentID: makeRandomStudentID(),
        uuid: Math.random().toString(36).substr(2, 11),
        name: `테스트${i}`,
      };
    }
  });

  return data;
};

const userData = createRandomUser(data);

function MainPage({}: MainPageProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { uuid } = useAppSelector(useUserSelector);
  const handleOpen = () => {
    setOpenModal(!openModal);
  };

  if (!uuid) {
    return <Redirect to="/login" />;
  }

  return (
    <AppLayout>
      <Header>
        <HelperButton onClick={handleOpen} />
        <MenuInfo />
      </Header>
      <Cabinet userData={userData} />
      <HelperModal open={openModal} setOpen={handleOpen} />
    </AppLayout>
  );
}

export default MainPage;

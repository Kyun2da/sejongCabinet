import React from 'react';
import Header from '../../Components/Header';
import { useAppSelector } from '../../redux/hooks';
import { Redirect, useHistory } from 'react-router-dom';

export type MainPageProps = {};

function MainPage({}: MainPageProps) {
  const uuid = useAppSelector((state) => state.users.uuid);

  // mainpage -> userpage 테스트용으로 추가했습니다 (21-05-22)
  const history = useHistory();

  return (
    <>
      <Header></Header>
      {uuid}

      {/* mainpage -> userpage 테스트용으로 추가했습니다 (21-05-22) */}
      <div>
        <button
          style={{ position: 'absolute', top: '50%', right: '40%' }}
          onClick={() => history.push('/userpage')}
        >
          to UserPage
        </button>
        <button
          style={{ position: 'absolute', top: '50%', left: '40%' }}
          onClick={() => history.push('/userpage')}
        >
          to AdminPage
        </button>
      </div>
    </>
  );
}

export default MainPage;

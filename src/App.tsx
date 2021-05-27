import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import { auth, database } from './config/firebase.config';
import { useObject } from './hooks/useObject';
import { setServerStatus } from './redux/server/serverSlice';
import useAuthState from './hooks/useAuthState';
import {
  setUserInfo,
  setUserUID,
  userInitialState,
} from './redux/user/userSlice';
import { useAppDispatch } from './redux/hooks';

function App() {
  const dispatch = useAppDispatch();
  const [user, authLoading, authError] = useAuthState(auth);
  const [userInfo, userInfoLoading, userInfoError] = useObject(
    database.ref(`users/${user?.uid}`),
  );

  const [serverInfo, serverInfoLoading, serverInfoError] = useObject(
    database.ref('server/status'),
  );

  // 파이어베이스 유저 데이터 리덕스로 옮기기
  useEffect(() => {
    if (user) {
      dispatch(setUserUID(user.uid));
    } else {
      dispatch(setUserUID(null));
      dispatch(setUserInfo(userInitialState));
    }
  }, [user]);

  // 파이어베이스 유저 정보 데이터 리덕스로 옮기기
  useEffect(() => {
    if (userInfo?.val()) {
      dispatch(setUserInfo(userInfo.val()));
    }
  }, [userInfo]);

  // 파이어베이스 서버 데이터 리덕스로 옮기기
  useEffect(() => {
    if (serverInfo) {
      dispatch(setServerStatus(serverInfo.val()));
    }
  }, [serverInfo]);

  if (authLoading || userInfoLoading || serverInfoLoading) {
    return <div>로딩중..</div>;
  }

  return (
    <Router>
      <Switch>
        <Route path="/main" component={MainPage} exact />
        <Route path={['/', '/login']} component={Login} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/userpage" component={UserPage} exact />
        <Route path="/adminpage" component={AdminPage} exact />
      </Switch>
    </Router>
  );
}

export default App;

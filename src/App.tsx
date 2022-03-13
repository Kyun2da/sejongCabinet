import { useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { auth, database } from './config/firebase.config';
import useAuthState from './hooks/useAuthState';
import { useObject } from './hooks/useObject';
import AdminPage from './pages/AdminPage';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import SignUp from './pages/SignUp';
import UserPage from './pages/UserPage';
import { setCabinet } from './redux/cabinet/cabinetSlice';
import { useAppDispatch } from './redux/hooks';
import { setServerStatus } from './redux/server/serverSlice';
import {
  setUserInfo,
  setUserUID,
  userInitialState,
} from './redux/user/userSlice';

export default function App() {
  const dispatch = useAppDispatch();
  const [user] = useAuthState(auth);
  const [userInfo] = useObject(database.ref(`users/${user?.uid}`));

  const [serverInfo] = useObject(database.ref('server/status'));

  const [cabinetInfo] = useObject(database.ref('cabinet'));
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

  useEffect(() => {
    if (cabinetInfo) {
      dispatch(setCabinet(cabinetInfo.val()));
    }
  }, [cabinetInfo]);

  return (
    <HashRouter>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/adminpage" element={<AdminPage />} />
      </Routes>
    </HashRouter>
  );
}

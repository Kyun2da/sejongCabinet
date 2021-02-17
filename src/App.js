import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth, database } from './configs/firebase.config';
import LoginContainer from './Container/LoginContainer';
import SIgnUpContainer from './Container/SIgnUpContainer';
import MainPageContainer from './Container/MainPageContainer';
import UserPageContainer from './Container/UserPageContainer';
import AdminPageContainer from './Container/AdminPageContainer';
import getUserData from './utils/firebase/getUserData';
import getCabinetData from './utils/firebase/getCabinetData';
import { clearCurrentUser, setCurrentUser } from './redux/auth/auth.reducer';
import getServerData from './utils/firebase/getServerData';

const Container = styled.div`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    let uid = null;
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setCurrentUser(user));
        uid = user.uid;
        getUserData(user.uid, dispatch);
      } else {
        database.ref(`users/${uid}`).off('value');
        dispatch(clearCurrentUser());
      }
    });
    return () => unsubscribeFromAuth();
  }, [dispatch]);
  useEffect(() => {
    getCabinetData(dispatch);
    getServerData(dispatch);
  });
  return (
    <Container>
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <Switch>
          <Route path="/" component={LoginContainer} exact />
          <Route path="/signup" component={SIgnUpContainer} exact />
          <Route path="/main" component={MainPageContainer} exact />
          <Route path="/userpage" component={UserPageContainer} exact />
          <Route path="/adminpage" component={AdminPageContainer} exact />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;

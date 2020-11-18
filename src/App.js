import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from './configs/firebase.config';
import LoginContainer from './Container/LoginContainer';
import SIgnUpContainer from './Container/SIgnUpContainer';
import MainPageContainer from './Container/MainPageContainer';
import UserPageContainer from './Container/UserPageContainer';
import getUserData from './utils/firebase/getUserData';
import getCabinetData from './utils/firebase/getCabinetData';
import { clearCurrentUser, setCurrentUser } from './redux/auth/auth.reducer';

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
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setCurrentUser(user));
        getUserData(user.uid, dispatch);
        getCabinetData(dispatch);
      } else {
        dispatch(clearCurrentUser());
      }
    });
    return () => unsubscribeFromAuth();
  }, [setCurrentUser, clearCurrentUser]);
  return (
    <Container>
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <Switch>
          <Route path="/" component={LoginContainer} exact />
          <Route path="/signup" component={SIgnUpContainer} exact />
          <Route path="/main" component={MainPageContainer} exact />
          <Route path="/userpage" component={UserPageContainer} exact />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;

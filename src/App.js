import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from './configs/firebase.config';
import { setCurrentUser, clearCurrentUser } from './redux/auth/auth.actions';
import LoginContainer from './Container/LoginContainer';
import SIgnUpContainer from './Container/SIgnUpContainer';
import MainPageContainer from './Container/MainPageContainer';
import getUserData from './utils/firebase/getUserData';
import getCabinetData from './utils/firebase/getCabinetData';

const Container = styled.div`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const App = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
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
  }, [currentUser, setCurrentUser, clearCurrentUser]);
  return (
    <Container>
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <Switch>
          <Route path="/" component={LoginContainer} exact />
          <Route path="/signup" component={SIgnUpContainer} exact />
          <Route path="/main" component={MainPageContainer} exact />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;

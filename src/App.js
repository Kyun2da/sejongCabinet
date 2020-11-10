import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Login from './Pages/Login';
import MainPage from './Pages/MainPage';
import SignUp from './Pages/SignUp';
import { auth } from './configs/firebase.config';
import { setCurrentUser, clearCurrentUser } from './redux/auth/auth.actions';

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
          <Route path="/" component={Login} exact />
          <Route path="/signup" component={SignUp} exact />
          <Route path="/main" component={MainPage} exact />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;

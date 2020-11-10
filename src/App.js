import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './Pages/Login';
import MainPage from './Pages/MainPage';
import SignUp from './Pages/SignUp';

const Container = styled.div`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

class App extends Component {
  render() {
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
  }
}

export default App;

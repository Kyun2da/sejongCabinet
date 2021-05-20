import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';

function App() {
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

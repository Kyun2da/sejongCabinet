import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <>
      <Switch>
        <Route path={['/', '/main']} exact>
          <MainPage />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/userpage" exact>
          <UserPage />
        </Route>
        <Route path="/adminpage" exact>
          <AdminPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;

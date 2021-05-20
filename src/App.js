import 'antd/dist/antd.css'
import Test from './Test';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { AuthContext, AuthProvider } from './components/AuthState';
import React, {useState, useEffect, useContext} from "react"
import Deshboard from './components/Deshboard';
import HomeScreen from './components/HomeScreen';
import HeaderPage from './components/HeaderPage';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import UpdateProfile from './components/Details/UpdateProfile';
import Quote from './components/Details/Quote';
import NewTest from './components/Details/NewTest';
import BuildAgain from './components/Details/BuildAgain';
import CardMove from './CardMove/CardMove';

function App() {
  // const {mgs} = useContext(AuthContext)
  return (
    <div>
      <AuthProvider>
      <Router>
        <HeaderPage />
        <Switch>
          <PrivateRoute path="/" exact component={HomeScreen} />    
          <PrivateRoute path="/qoute" exact component={Quote} />    
          <PrivateRoute path="/card" exact component={CardMove} />    
          <PrivateRoute path="/yes" exact component={BuildAgain} />    
          <PrivateRoute path="/test" exact component={NewTest} />    
          <PrivateRoute path="/dashboard" exact component={Deshboard} />    
          <Route path="/edit_profile" exact component={UpdateProfile} />    
          <Route path="/register" exact component={Register} />    
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

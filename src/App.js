import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import './assets/main.css';
import { Switch, Route } from "react-router-dom";
import Login from './views/Login';
import HomePage from './views/HomePage'
import GamePage from './views/GamePage';
import { logedin } from './features/loginSlice';
import { useHistory } from "react-router-dom";



function App() {
  const logedinStatus = useSelector(logedin)
  // Login detector
  const hestory = useHistory()
  useEffect(()=>{
    logedinStatus === "success" ?
    hestory.push('./home'):
    hestory.push('./login')
  },[])

  return (
    <div className="App">
      <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/home" component={HomePage} />
          <Route path="/:name" component={GamePage} />
        </Switch>
    </div>
  );
}

export default App;

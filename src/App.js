import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import SignIn from './Components/SignIn'
import './App.css';
import MainScreen from "./Components/MainScreen";
import Menu from './Components/Menu'
import Help from './Components/Help'

function App() {

  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [service, setService] = useState('101')

  const setUserNamePass = (nam, pass) => {
    setFullName(nam)
    setPassword(pass)
  }



  const setLinkAddress = (num) => {

    setService(num);
  }

  const setTheHeader = (event) => {
    setService(event.target.value)

  }


  //-------------------------------------------------
  return (
    <div className="App">

      <Router >


        <Route exact path={`/mainpage ${fullName}`} component={() => { return <Menu service={service} setLinkAddress={setLinkAddress} setTheHeader={setTheHeader} /> }} />

        <Switch>

          <Route exact path={'/'} component={() => { return <SignIn setNameProp={setUserNamePass} fullName={fullName} /> }} />
          <Route exact path={`/mainpage ${fullName}`} component={() => { return <MainScreen fullName={fullName} serviceNum={service} /> }} />
          <Route exact path={`/service${service}`} component={() => { return <Help serviceNum={service} fullName={fullName} password={password} /> }} />

        </Switch>
      </Router>












    </div>
  );
}

export default App;

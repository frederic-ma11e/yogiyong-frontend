import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../src/pages/Main/index.js";
import Login from "../src/pages/Login/Login.js"

import SignUp from './pages/SignUp';
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Login/SingUp" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

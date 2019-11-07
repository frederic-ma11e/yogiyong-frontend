import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "../src/pages/Main/index.js";
import Login from "../src/pages/Login/index.js";
import SignUp from './pages/SignUp/index.js';

import RestaurantInfo from "./pages/RestaurantInfo";
import foodOrder from './pages/FoodOrderPage';
import StoreList from "./pages/StoreList/index.js"
import GoogleMaps from "./Components/GoogleMaps"
import OrderThankyou from "./pages/OrderThankyou/"

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/login/signUp" component={SignUp} />
          <Route exact path="/restaurant/:id" component={RestaurantInfo} />
          <Route exact path="/food-order" component={foodOrder} />
          <Route exact path="/google-maps" component={GoogleMaps} />
          <Route exact path="/thank-you" component={OrderThankyou} />
          <Route exact path="/storelist/:categoryId" component={StoreList} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

import React, { Component } from "react";
import Main from "./pages/Main";
import Payments from "./pages/Payments";
import Custom from "./pages/Custom";
import Test from "./pages/Test";
import Login from "./pages/Login";
import { Router, Route, Switch } from "react-router-dom";
import { history } from './components/routing';
import Layout from './components/Layout'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/login" component={Login} exact />
          <Layout>
            <Route path="/" component={Main} exact />
            <Route path="/custom" component={Custom} exact />
            <Route path="/custom/payments" component={Payments} exact />
            <Route path="/custom/test" component={Test} exact />
          </Layout>
        </Switch>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import Main from "./pages/Main";
import Payments from "./pages/Payments";
import Custom from "./pages/Custom";
import Test from "./pages/Test";
import { Router, Route } from "react-router-dom";
import { history } from './components/routing';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <>
          <Route path="/" component={Main} exact />
          <Route path="/custom" component={Custom} exact />
          <Route path="/custom/payments" component={Payments} exact />
          <Route path="/custom/test" component={Test} exact />
        </>
      </Router>
    );
  }
}

export default App;

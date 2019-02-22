import React, { Component } from "react";
import Main from "./pages/Main";
import Payments from "./pages/Payments";
import Custom from "./pages/Custom";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Route path="/" component={Main} exact />
        <Route path="/custom" component={Custom} exact />
        <Route path="/custom/payments" component={Payments} exact />
      </>
    );
  }
}

export default App;

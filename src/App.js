import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/core/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Login from "./components/core/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

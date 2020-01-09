// rafce

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";
import Error from "./pages/error";
import Rooms from "./pages/rooms";
import SingleRoom from "./pages/singleRoom";

// Components
import Navbar from "./components/navbar";

const app = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/rooms" component={Rooms} exact />
          <Route path="/rooms/:slug" component={SingleRoom} exact />
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
};

export default app;

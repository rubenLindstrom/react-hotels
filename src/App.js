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

// TODO:
/*
  -Remove indoors image
  -Optimize hero images
  -Add another hero image
  -Fix hover-effect on room card
  -Fix room filters
  -Add text when no rooms match?
  -Change room banner image
  -Add slider to rooms? Image navigation
  -Add footer to rooms-pages
*/

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

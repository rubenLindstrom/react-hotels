import React, { useEffect } from "react";
import "./App.css";
import { withRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";
import Error from "./pages/error";
import Rooms from "./pages/rooms";
import SingleRoom from "./pages/singleRoom";

// Components
import Navbar from "./components/navbar";

const App = props => {
  useEffect(() => window.scrollTo(0, 0), [props.location.pathname]);

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/rooms" component={Rooms} exact />
        <Route path="/rooms/:slug" component={SingleRoom} exact />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default withRouter(App);

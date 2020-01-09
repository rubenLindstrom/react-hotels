import React from "react";
import { Link } from "react-router-dom";

// Components
import { Hero, Banner } from "../components/atoms";

const error = () => {
  return (
    <Hero>
      <Banner title="404" subTitle="page not found">
        <Link to="/rooms" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
  );
};

export default error;

import React from "react";
import { Link } from "react-router-dom";

// Components
import { Hero, Banner } from "../components/atoms";
import Services from "../components/services";
import FeaturedRooms from "../components/featuredRooms";

const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subTitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default home;

import React from "react";
import { Link } from "react-router-dom";

// Components
import { Hero, Banner } from "../components/atoms";
import RoomContainer from "../components/rooms/roomContainer";

const rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/rooms" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
};

export default rooms;

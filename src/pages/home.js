import React from "react";
import { Link } from "react-router-dom";

// Components
import Slideshow from "../components/slideshow";
import { Banner } from "../components/atoms";
import Services from "../components/services";
import FeaturedRooms from "../components/featuredRooms";

const slideshowSettings = {
  images: [
    require("../images/home1.jpeg"),
    require("../images/home2.jpg"),
    require("../images/home.jpg")
  ],
  slideDuration: 4000
};

const home = () => {
  return (
    <>
      <Slideshow {...slideshowSettings}>
        <Banner
          title="luxurious rooms"
          subTitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Slideshow>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default home;

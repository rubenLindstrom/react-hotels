import React from "react";

// Components
import { Title } from "./atoms";

// Icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const services = () => {
  const services = [
    {
      icon: <FaCocktail />,
      title: "free cocktails",
      info: "Enjoy complementary drinks on the house, to top off your vacation!"
    },
    {
      icon: <FaHiking />,
      title: "endless hiking",
      info:
        "Choose through a plethora of guided tours throughout the local landscapes."
    },
    {
      icon: <FaShuttleVan />,
      title: "free shuttle",
      info:
        "Get anywhere you need to go with our local, free, shuttle. Quick and easy!"
    },
    {
      icon: <FaBeer />,
      title: "local beer",
      info: "We have connections to many local breweries. Taste the culture!"
    }
  ];

  return (
    <section className="services">
      <Title>services</Title>
      <div className="services-outer">
        <div className="services-center">
          {services.map((item, index) => (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default services;

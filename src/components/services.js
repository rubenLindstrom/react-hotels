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
      info:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, neque."
    },
    {
      icon: <FaHiking />,
      title: "endless hiking",
      info:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, neque."
    },
    {
      icon: <FaShuttleVan />,
      title: "free shuttle",
      info:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, neque."
    },
    {
      icon: <FaBeer />,
      title: "strongest beer",
      info:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, neque."
    }
  ];

  return (
    <section className="services">
      <Title>services</Title>
      <div className="services-center">
        {services.map((item, index) => (
          <article key={index} className="service">
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default services;

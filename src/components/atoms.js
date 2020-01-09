import React from "react";
import styled from "styled-components";
import defaultImg from "../images/room-1.jpeg";
import loadingGif from "../images/gif/loading-arrow.gif";

export const Banner = ({ title, subTitle, children }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div />
      <p>{subTitle}</p>
      {children}
    </div>
  );
};

export const Hero = ({ children, hero = "defaultHero" }) => {
  return <header className={hero}>{children}</header>;
};

export const StyledHero = styled.header`
  min-height: calc(100vh - 66px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${props => props.img || defaultImg}) center/cover no-repeat;
`;

export const Loading = () => {
  return (
    <div className="loading">
      <h4>rooms data loading...</h4>
      <img src={loadingGif} alt="loading" />
    </div>
  );
};

export const Title = ({ children }) => {
  return (
    <div className="section-title">
      <h4>{children}</h4>
      <div />
    </div>
  );
};

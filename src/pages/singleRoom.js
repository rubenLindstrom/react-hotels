import React from "react";
import { Link } from "react-router-dom";
import { useRoom } from "../util/hooks";

// Components
import { StyledHero, Banner } from "../components/atoms";

const SingleRoom = props => {
  const slug = props.match.params.slug;
  const room = useRoom(slug);

  if (!room) {
    return (
      <div className="error">
        <h3>no such room could be found</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images
  } = room;
  const [mainImg, ...restImages] = images;

  return (
    <>
      <StyledHero img={mainImg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {restImages.map((item, index) => (
            <img key={index} src={item} alt={name} />
          ))}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: ${price}</h6>
            {/* TODO: Byt mot kvadratmeter */}
            <h6>size: ${size} SQFT</h6>
            <h6>
              max capacity: {capacity} {capacity > 1 ? "people" : "person"}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "breakfast included"}</h6>
          </article>
        </div>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
};

export default SingleRoom;

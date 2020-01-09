import React from "react";
import { useRooms } from "../util/hooks";

// Components
import { Loading, Title } from "./atoms";
import Room from "./room";

const FeaturedRooms = () => {
  const { featuredRooms: rooms, loading } = useRooms();

  const roomsMarkup = rooms.map(room => <Room key={room.id} room={room} />);

  return (
    <section className="featured-rooms">
      <Title>featured rooms</Title>
      <div className="featured-rooms-center">
        {loading ? <Loading /> : roomsMarkup}
      </div>
    </section>
  );
};

export default FeaturedRooms;

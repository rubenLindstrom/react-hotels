import React from "react";

import { useRooms } from "../../util/hooks";

// Components
import RoomFilter from "./roomFilter";
import RoomList from "./roomList";
import { Loading } from "../atoms";

const RoomsContainer = () => {
  const { loading, sortedRooms, rooms } = useRooms();

  if (loading) return <Loading />;
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
};

export default RoomsContainer;

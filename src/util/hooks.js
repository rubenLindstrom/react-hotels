import { useContext } from "react";
import roomContext from "./roomContext";

export const useRooms = () => {
  const rooms = useContext(roomContext);
  return rooms;
};

export const useRoom = slug => {
  const rooms = useRooms();
  return { loading: rooms.loading, room: rooms.getRoom(slug) };
};

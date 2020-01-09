import React, { useState, useEffect } from "react";
import items from "../data";
import Client from "./contentful";

const RoomContext = React.createContext();
export default RoomContext;

const RoomProvider = ({ children }) => {
  const [state, setState] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  });

  const [filter, setFilter] = useState({
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  });

  const numFilters = [
    "capacity",
    "price",
    "minPrice",
    "maxPrice",
    "minSize",
    "maxSize"
  ];

  useEffect(() => {
    Client.getEntries({
      content_type: "room",
      order: "fields.price"
    }).then(res => {
      handleRoomData(res.items);
    });
  }, []);

  const handleRoomData = items => {
    const rooms = formatData(items);
    const featuredRooms = rooms.filter(room => room.featured);

    const maxPrice = Math.max(...rooms.map(item => item.price));
    const maxSize = Math.max(...rooms.map(item => item.size));

    setState({
      rooms,
      featuredRooms,
      sortedRooms: [...rooms],
      loading: false
    });

    setFilter(prevState => ({
      ...prevState,
      price: maxPrice,
      maxPrice,
      maxSize
    }));
  };

  const formatData = items => {
    return items.map(item => {
      const id = item.sys.id;
      const images = item.fields.images.map(image => image.fields.file.url);

      const room = { ...item.fields, id, images };
      return room;
    });
  };

  const getRoom = slug => {
    return state.rooms.find(room => room.slug === slug);
  };

  // On filter in view change - update state
  const handleFilterChange = e => {
    const target = e.target;
    let value = e.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if (numFilters.includes(name)) value = parseInt(value);

    setFilter(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // On filter change - update rooms
  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      sortedRooms: [...state.rooms].filter(filterFunction)
    }));
    // eslint-disable-next-line
  }, [filter]);

  const filterFunction = room => {
    let { type, capacity, price, minSize, maxSize, breakfast, pets } = filter;

    if (type !== "all" && !room.type === type) return false;
    if (capacity !== 1 && room.capacity < capacity) return false;
    if (room.price > price) return false;
    if (room.size < minSize || room.size > maxSize) return false;
    if (breakfast && !room.breakfast) return false;
    if (pets && !room.pets) return false;
    return true;
  };

  return (
    <RoomContext.Provider
      value={{ ...state, filter, getRoom, handleFilterChange }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export { RoomProvider };

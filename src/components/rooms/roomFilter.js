import React from "react";
import { useRooms } from "../../util/hooks";

// Components
import { Title } from "../atoms";

const getUnique = (items, value) => [
  ...new Set(items.map(item => item[value]))
];

const getOptions = data =>
  data.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));

const RoomFilter = ({ rooms }) => {
  const {
    handleFilterChange,
    filter: {
      type,
      capacity,
      price,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets
    }
  } = useRooms();

  // Get unique room types
  const types = ["all", ...getUnique(rooms, "type")];
  const people = getUnique(rooms, "capacity");

  return (
    <section className="filter-container">
      <Title>search rooms</Title>
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleFilterChange}
          >
            {getOptions(types)}
          </select>
        </div>
        {/* end of select type */}
        {/* guests */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleFilterChange}
          >
            {getOptions(people)}
          </select>
        </div>
        {/* end guests */}
        {/* TODO: Update state only on blur, not every tick */}
        {/* room price */}
        <div className="form-group">
          {/* TODO: Call it max-price? */}
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleFilterChange}
            className="form-control"
          />
        </div>
        {/* end room price */}
        {/* TODO: Clarify unit */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="minSize"
              value={minSize}
              onChange={handleFilterChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="maxSize"
              value={maxSize}
              onChange={handleFilterChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleFilterChange}
            />
            <label htmlFor="breakfast">breakfast included</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleFilterChange}
            />
            <label htmlFor="pets">pets allowed</label>
          </div>
        </div>
        {/* end extras */}
      </form>
    </section>
  );
};

export default RoomFilter;

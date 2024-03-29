import React, { useState } from "react";

import Thumbnail from "../img/12.png";
import Thumbnail2 from "../img/13.png";
import Thumbnail3 from "../img/14.png";
import Thumbnail4 from "../img/15.png";
import ItemUnit from "./ItemUnit";

const Simple__Items = [
  {
    id: "1",
    thumbnail: Thumbnail,
    name: "Longines",
    tag: "watches",
    description: "THIS IS THE BEST WATCH",
  },
  {
    id: "2",
    thumbnail: Thumbnail2,
    name: "Casio",
    tag: "watches",
    description: "THIS IS THE BEST WATCH",
  },
  {
    id: "3",
    thumbnail: Thumbnail3,
    name: "Tissot",
    tag: "watches",
    description: "THIS IS THE BEST WATCH",
  },
  {
    id: "4",
    thumbnail: Thumbnail4,
    name: "Orient",
    tag: "watches",
    description: "THIS IS THE BEST WATCH",
  },
];

const ItemsList = () => {
  const [items, setItems] = useState(Simple__Items);
  return (
    <section className="items">
      {items.map(({ id, thumbnail, name, tag, description }) => (
        <ItemUnit
          key={id}
          postID={id}
          name={name}
          thumbnail={thumbnail}
          tag={tag}
          description={description}
        />
      ))}
    </section>
  );
};

export default ItemsList;

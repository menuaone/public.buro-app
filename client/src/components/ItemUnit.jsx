import React from "react";

const ItemUnit = ({ id, thumbnail, name, tag, description }) => {
  return (
    //   <div>ITEM UNIT</div>;
    <article className="item">
      <div className="item__image">
        <img src={thumbnail} alt={name} />
      </div>
      <p className="m--text">{description}</p>
    </article>
  );
};

export default ItemUnit;

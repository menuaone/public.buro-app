import React from "react";
import Main__img from "../img/main_img.png";

const Main = () => {
  return (
    <div className="container">
      <div className="mainscreen__box">
        <div className="title__box">
          <h1 className="main__title">Welcome to your own collections</h1>
          <h2 className="main__subtitle">
            explo<span className="orange">re</span>, c
            <span className="orange">re</span>ate & coll
            <span className="orange">ec</span>t items{" "}
          </h2>
        </div>
        <img src={Main__img} alt="create" className="main__img" />
      </div>

      <div className="maintext__box">
        <p className="main__txt">Find items</p>
        <p className="main__txt">Create collections</p>
        <p className="main__txt">Save them</p>
        <p className="main__txt">Expand</p>
        <p className="main__txt">Share</p>
      </div>
    </div>
  );
};

export default Main;

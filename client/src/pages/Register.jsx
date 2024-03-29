import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  return (
    <div>
      <section className="register">
        <div className="container">
          <h2 className="h2 reg__title">Sign Up</h2>
          <form className="form reg__form">
            <p className="form__error-message">Something went wrong</p>
            <input
              className="reg__input"
              type="text"
              placeholder="Enter your name"
              name="name"
              value={userData.name}
              onChange={changeInputHandler}
            />
            <input
              className="reg__input"
              type="text"
              placeholder="Enter your email"
              name="email"
              value={userData.email}
              onChange={changeInputHandler}
            />
            <input
              className="reg__input"
              type="Password"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={changeInputHandler}
            />
            <input
              className="reg__input"
              type="Password"
              placeholder="Confirm password"
              name="password2"
              value={userData.password2}
              onChange={changeInputHandler}
            />
            <button type="submit" className="btn reg__btn">
              Register
            </button>
          </form>

          <small className="reg__after-txt">
            Already have an account?{" "}
            <Link to="/login" className="reg__after-link">
              Sigh in
            </Link>
          </small>
        </div>
      </section>
    </div>
  );
};

export default Register;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  return (
    <div>
      <section className="login">
        <div className="container">
          <h2 className="h2 login__title">Sign In</h2>
          <form className="form login__form">
            <p className="form__error-message">Something went wrong</p>

            <input
              className="login__input"
              type="text"
              placeholder="Enter your email"
              name="email"
              value={userData.email}
              onChange={changeInputHandler}
            />
            <input
              className="login__input"
              type="Password"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={changeInputHandler}
            />

            <button type="submit" className="btn login__btn">
              Login
            </button>
          </form>

          <small className="login__after-txt">
            Don't have an account?{" "}
            <Link to="/register" className="login__after-link">
              Sigh up
            </Link>
          </small>
        </div>
      </section>
    </div>
  );
};

export default Login;

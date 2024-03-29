import React from "react";
import { Link } from "react-router-dom";

import "../css/main.css";
import Logo from "../img/logo_pb_w.svg";
import SearchInput from "./SearchInput";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo-link">
          <img src={Logo} alt="publicburo" className="nav__logo" />
        </Link>
        <SearchInput />
        <div className="btn__box">
          <Link to="/login" className="sighin__btn">
            SIGH IN
          </Link>
          <Link to="/register" className="sighup__btn">
            SIGH UP
          </Link>

          <div className="lang__box">
            <span className="lang__txt">ENG</span>
          </div>
        </div>
        {/* media button */}
        <button className="nav__toggle-btn">
          <AiOutlineClose />
        </button>
      </div>
    </nav>
  );
};

export default Header;

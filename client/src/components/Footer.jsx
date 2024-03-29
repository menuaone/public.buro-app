import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo_pb_w.svg";
import "../css/main.css";

const Footer = () => {
  return (
    <footer className="container footer__container">
      <ul className="footer__collections">
        <li>
          <Link to="/profile/:id/books">Books</Link>
        </li>
        <li>
          <Link to="/profile/coins">Coins</Link>
        </li>
        <li>
          <Link to="/profile/:id/watches">Watches</Link>
        </li>
        <li>
          <Link to="/profile/stamps">Stamps</Link>
        </li>
        <li>
          <Link to="/profile/rings">Rings</Link>
        </li>
        <li>
          <Link to="/profile/glasses">Glasses</Link>
        </li>
      </ul>
      <div className="footer__logo-box">
        <Link to="/" className="footer__logo-link">
          <img src={Logo} alt="publicburo" className="footer__logo" />
        </Link>
        <span className="rights">&copy; 2024. Menua Agamirov</span>
      </div>
    </footer>
  );
};

export default Footer;

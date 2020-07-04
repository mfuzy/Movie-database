import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <header className="Header">
      <h1>Movie database</h1>
      <nav>
        <ul>
          <li>
            <Link className="link-menu" to="/">
              Movie search
            </Link>
          </li>
          <li>
            {" "}
            <Link className="link-menu" to="/favourite">
              My favourite movies
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

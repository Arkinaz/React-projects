import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <h1>Logo</h1>

          <nav>
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/products">Products</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

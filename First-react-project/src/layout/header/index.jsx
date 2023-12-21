import "./header.scss";
import { FaBeer } from "react-icons/fa";

import React from "react";

function Header() {
  return (
    <header>
      <div className="cont">
        <div className="header">
          <h1>
            <FaBeer />
            Logo
          </h1>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

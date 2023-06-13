import React from "react";
import { Link } from "react-router-dom";

export default function HeaderL() {
  return (
    <div id='headerL'>
      <div>
        <Link to="/">
          <img id="logo" src="/assets/silver_oak_tree.png" />
        </Link>
      </div>
      <Link to="/">
        <img id="logo-name" src="/assets/silver_oak_name.png" />
      </Link>
      <div id="menu">
        <Link className="menu-item" to="/">
          Home
        </Link>
        <span className="seperator">||</span>
        <Link className="menu-item" to="/gallery">
          Gallery
        </Link>
        <span className="seperator">||</span>
        <Link className="menu-item" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

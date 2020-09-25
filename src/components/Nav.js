import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="nav-menu">
      <li className="nav-menu-item">
        <NavLink activeStyle={{ fontWeight: "bold" }} exact to={"/"}>
          Home
        </NavLink>
      </li>
      <li className="nav-menu-item">
        <NavLink activeStyle={{ fontWeight: "bold" }} to={"/newTweet"}>
          New Tweet
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;

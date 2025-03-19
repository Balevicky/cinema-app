import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="header">
      <h1>Ciné program</h1>
      <nav>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Acceuil</li>
          </NavLink>
          <NavLink
            to="/favorite"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Favorite</li>
          </NavLink>
          <NavLink
            to="/weekdisplay"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Affiche semaine</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

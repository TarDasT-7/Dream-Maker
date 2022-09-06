import React from "react";

import { Link, NavLink } from "react-router-dom";

import classes from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h1>
          <Link to="/"> Dream Maker </Link>
        </h1>
      </div>

      <div className={classes.menu}>
        <ul>
          <li>
            <NavLink to="/music-page" className={(navData) => (navData.isActive ? "active-link" : "")}>
              Music
            </NavLink>
          </li>
          <li>
            <NavLink to="/clouth-page" className={(navData) => (navData.isActive ? "active-link" : "")}>
                Clouth
            </NavLink>
          </li>
          <li>
            <NavLink to="/studio-page" className={(navData) => (navData.isActive ? "active-link" : "")} >
                Studios
            </NavLink>

          </li>
          <li>
            <NavLink to="/tatto-page" className={(navData) => (navData.isActive ? "active-link" : "")}>
                Tatto
            </NavLink>

          </li>

          <li>
            <NavLink to="/login-page">
              <span>
                Login
              </span>
            </NavLink>

          </li>

        </ul>
      </div>
    </header>
  );
};

export default Navigation;

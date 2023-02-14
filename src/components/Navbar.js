import { AltRoute } from "@mui/icons-material";
import React, { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "./Public.css";

function Navbar(props) {
  const { screenWidth, themeMode } = props;

  let tagbox;
  let screen;

  if (themeMode) {
    tagbox = (
      <div className="tag">
        <div className="font-subbody">
          {themeMode.charAt(0).toUpperCase() + themeMode.slice(1)} Theme Enabled
        </div>
      </div>
    );
  } else {
    tagbox = undefined;
  }

  if (screenWidth >= 576) {
    screen = (
      <div className="container fixed-bar-container">
        <div className={"font-subheader font-colormain"}>pluemine</div>
        <div
          className="d-flex flex-row align-items-center"
          style={{ gap: "32px" }}
        >
          {tagbox}
          <div className="d-flex flex-row" style={{ gap: "32px" }}>
            <Link
              to="/"
              className="font-subbodybold font-colormain"
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>
            <Link
              to="/settings"
              className="font-subbodybold font-colorsub"
              style={{ textDecoration: "none" }}
            >
              Settings
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    screen = (
      <div className="container fixed-bar-container justify-content-center">
        <div className={"font-subheader font-colormain"}>pluemine</div>
      </div>
    );
  }

  return (
    <nav className="global-top">
      <div className="fixed-bar">{screen}</div>
    </nav>
  );
}

export default Navbar;

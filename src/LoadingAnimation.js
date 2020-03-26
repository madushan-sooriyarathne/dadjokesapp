import React, { Component } from "react";

import "./css/LoadingAnimation.css";
import laughing from "./img/laughing.png";

export default class LoadingAnimation extends Component {
  render() {
    return (
      <div className="LoadingAnimation">
        <img
          className="LoadingAnimation-rollingFace"
          src={laughing}
          alt="animation"
        ></img>
        <p className="LoadingAnimation-text">Loading...</p>
      </div>
    );
  }
}

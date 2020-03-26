import React, { Component } from "react";

import "./css/SideBar.css";
import laughing from "./img/laughing.png";

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.click();
  }

  render() {
    return (
      <div className="SideBar">
        <h1 className="SideBar-heading  ">
          <span className="SideBar-title">Dad</span>{" "}
          <span className="SideBar-title-styled">Jokes</span>
        </h1>
        <img
          className="Sidebar-shaking-emoji"
          alt="Sidebar-emoji"
          src={laughing}
        ></img>
        <button onClick={this.handleClick} className="SideBar-btn">
          Load New Jokes
        </button>
      </div>
    );
  }
}

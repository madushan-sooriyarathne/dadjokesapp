import React, { Component } from "react";
import JokeContainer from "./JokeContainer";
import "./css/App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <JokeContainer />
      </div>
    );
  }
}

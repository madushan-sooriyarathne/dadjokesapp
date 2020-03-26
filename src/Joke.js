import React, { Component } from "react";
import Voter from "./Voter";
import Emoji from "./Emoji";
import "./css/Joke.css";

export default class Joke extends Component {
  constructor(props) {
    super(props);
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
  }

  up(id) {
    this.props.up(id);
  }

  down(id) {
    this.props.down(id);
  }

  render() {
    return (
      <div className="Joke">
        <Voter
          up={this.up}
          down={this.down}
          id={this.props.id}
          score={this.props.score}
        />
        <div className="Joke-text">{this.props.text}</div>
        <Emoji score={this.props.score} />
      </div>
    );
  }
}

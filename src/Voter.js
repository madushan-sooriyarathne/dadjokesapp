import React, { Component } from "react";
import "./css/Voter.css";

export default class Voter extends Component {
  constructor(props) {
    super(props);
    this.handleDown = this.handleDown.bind(this);
    this.handleUp = this.handleUp.bind(this);
  }

  handleUp(event) {
    this.props.up(this.props.id);
  }

  handleDown(event) {
    this.props.down(this.props.id);
  }

  render() {
    return (
      <div className="Voter">
        <button onClick={this.handleUp} className="Voter-btn">
          <span role="img" aria-label="emoji-point-up">
            👆
          </span>
        </button>
        <h2 className="Voter-score">{this.props.score}</h2>
        <button onClick={this.handleDown} className="Voter-btn">
          <span role="img" aria-label="emoji-point-down">
            👇
          </span>
        </button>
      </div>
    );
  }
}

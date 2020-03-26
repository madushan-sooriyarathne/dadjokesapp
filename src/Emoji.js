import React, { Component } from "react";
import "./css/Emoji.css";

import pissed from "./img/pissed.png";
import angry from "./img/angry.png";
import vomit from "./img/vomit.png";
import sick from "./img/sick.png";
import sad from "./img/sad.png";
import thinking from "./img/thinking.png";
import shock from "./img/shock.png";
import smile from "./img/smile.png";
import grinning from "./img/grinning.png";
import happy from "./img/happy.png";
import love from "./img/love.png";
import tongue from "./img/tongue.png";
import tongueOut from "./img/tongue-out.png";
import laugh from "./img/laugh.png";
import laughing from "./img/laughing.png";

const FACES = {
  "-7": pissed,
  "-6": angry,
  "-5": vomit,
  "-4": sick,
  "-3": sad,
  "-2": thinking,
  "-1": shock,
  "0": smile,
  "1": grinning,
  "2": happy,
  "3": tongue,
  "4": love,
  "5": tongueOut,
  "6": laugh,
  "7": laughing
};

export default class Emoji extends Component {
  render() {
    let emoji;
    if (this.props.score < -7 || this.props.score > 7) {
      emoji = this.props.score < 0 ? FACES["-7"] : FACES["7"];
    } else {
      emoji = FACES[this.props.score.toString()];
    }
    return <img className="Emoji" src={emoji} alt={this.props.score}></img>;
  }
}

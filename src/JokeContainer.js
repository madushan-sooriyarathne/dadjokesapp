import React, { Component } from "react";

import SideBar from "./SideBar";
import Joke from "./Joke";
import LoadingAnimation from "./LoadingAnimation";
import Storage from "./storage";

import "./css/JokeContainer.css";

const API_BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://icanhazdadjoke.com";

export default class JokeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      jokes: []
    };
    this.storage = new Storage();
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
    this.getRandomJokes = this.getRandomJokes.bind(this);
    this.click = this.click.bind(this);
  }

  async getRandomJokes(currentJokeList) {
    let counter = 0;
    let jokes = [];

    while (counter < 10) {
      let alreadyHas = false;

      // Fetch the data from the API
      const data = await fetch(API_BASE_URL, {
        headers: { Accept: "application/json" }
      }).then(res => res.json());

      // check if the request is success
      if (data.status === 200) {
        // check wether app already has the joke
        for (let joke of currentJokeList) {
          if (joke.id === data.id) {
            // Joke Already exists in the app
            alreadyHas = true;
            break;
          }
        }

        if (!alreadyHas) {
          jokes.push({ id: data.id, text: data.joke, score: 0 });
          counter++;
        }
      }
    }

    // return the updated jokes array
    return [...currentJokeList, ...jokes];
  }

  async componentDidMount() {
    // Check local storage for any jokes that already fetched.
    const prevJokes = this.storage.getItems();
    if (prevJokes.length < 1) {
      this.setState({ isLoading: true });
      // Make the request to the API and update the state with new data
      const updatedJokesList = await this.getRandomJokes(this.state.jokes);
      this.setState({ jokes: updatedJokesList, isLoading: false });
    } else {
      // Set the state with jokes stored in local storage
      this.setState({ jokes: prevJokes });
    }
  }

  componentDidUpdate() {
    this.storage.updateItems(this.state.jokes);
  }

  async click() {
    this.setState({ isLoading: true });
    const updatedJokesList = await this.getRandomJokes(this.state.jokes);
    this.setState({ jokes: updatedJokesList, isLoading: false });
  }

  // Change the individual joke's score
  up(id) {
    this.setState(st => {
      const updatedList = st.jokes.map(joke => {
        if (joke.id === id) {
          return { ...joke, score: joke.score + 1 };
        }
        return joke;
      });
      return { jokes: updatedList };
    });
  }

  down(id) {
    this.setState(st => {
      const updatedList = st.jokes.map(joke => {
        if (joke.id === id) {
          return { ...joke, score: joke.score - 1 };
        }
        return joke;
      });
      return { jokes: updatedList };
    });
  }

  render() {
    return (
      <div className="JokeContainer">
        <SideBar click={this.click} />
        <section className="Joke-Section">
          {this.state.isLoading ? (
            <LoadingAnimation />
          ) : (
            this.state.jokes.map(joke => (
              <Joke
                text={joke.text}
                id={joke.id}
                key={joke.id}
                score={joke.score}
                up={this.up}
                down={this.down}
              />
            ))
          )}
        </section>
      </div>
    );
  }
}

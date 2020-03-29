import React, { Component } from "react";
import MonsterCard from "./components/MonsterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Counter from "./components/Counter";
import Mixer from "./components/Mixer";
import monsters from "./monsters.json";

class App extends Component {

  state = {
    monsters,
    clickedArr: [],
    topScore: 0,
    score: 0,
    message: " ",
    wrongGuess: false
  };

  clickPicture = (id) => {
    const shuffledArr = this.shuffledArr(monsters);
    this.setState({ monsters: shuffledArr });
    if (this.state.clickedArr.includes(id)) {
      this.setState({ score: 0, clickedArr: [], message: "Sorry! YOU LOSE!!! Try Again!", wrongGuess: true });
    } else {
      this.setState({
        clickedArr: this.state.clickedArr.concat([id]),
        score: this.state.score + 1,
        message: "Way To Get Em",
        wrongGuess: false
      });
    }

    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
  }

  shuffledArr = (picturesArr) => {
    for (let i = picturesArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [picturesArr[i], picturesArr[j]] = [picturesArr[j], picturesArr[i]];
    }
    return picturesArr;
  }

  render() {

    return (

      <Wrapper>
        <Title>Memory Monster</Title>
        <Counter>Correct Guesses: <span className="score">{this.state.score} | Top Score: {this.state.topScore}</span>
          <p className="message">{this.state.message}</p>
        </Counter>
        <Mixer
          mixer={this.state.wrongGuess}
          monsters=
          {this.state.monsters.map(monster => (
            <MonsterCard
              clickPicture={this.clickPicture}
              id={monster.id}
              key={monster.id}
              image={monster.image}
              value={monster.clicky}
            />
          ))}
        />
      </Wrapper>
    );
  }
}


export default App;

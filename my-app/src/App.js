import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Counter from "./components/Counter";
import Mixer from "./components/Shaker";
import monsters from "./monsters.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clickedArr: [],
    topScore: 0,
    score: 0,
    message: " ",
    wrongGuess: false
  };

  clickPicture = (id) => {
    //arrange images in random manner
    const shuffledArr = this.shuffledArr(friends);
    this.setState({ friends: shuffledArr });
    //if clicked image already resets score and emptys array
    if (this.state.clickedArr.includes(id)) {
      this.setState({ score: 0, clickedArr: [], message: "You Already Clicked That! Game Over!! Click an Image to Try Again!", wrongGuess: true });
    } else {
      this.setState({
        clickedArr: this.state.clickedArr.concat([id]),
        score: this.state.score + 1,
        message: "Good Guess!",
        wrongGuess: false
      });
    }
    //sets topscore
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
  }

  shuffledArr = (picturesArr) => {
    for(let i = picturesArr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random()*(i + 1));
      [picturesArr[i], picturesArr[j]] = [picturesArr[j], picturesArr[i]];
    }
    return picturesArr;
  }
  

    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
  return (
    <Wrapper>
      <Title>Memory Game</Title>
      <Counter>Correct Guesses So Far: <span className="score">{this.state.score} | Top Score: {this.state.topScore}</span>
        <p className="message">{this.state.message}</p>
      </Counter>
      <Shaker
      shaker = {this.state.wrongGuess}
      friends =
        {this.state.friends.map(friend => (
          <FriendCard
            clickPicture={this.clickPicture}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            value={friend.clicky}
          />
        ))}
      />
    </Wrapper>
  );
}
}


export default App;

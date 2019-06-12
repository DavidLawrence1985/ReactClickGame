import React, { Component} from 'react';
import CharacterCard from "./components/CharacterCard";
import Title from "./components/Title"
import Wrapper from "./components/Wrapper"
import character from "./characters.json";
import './App.css';


class App extends Component {

  state = {
    character,
    clicked: [],
    count: 0
  }

  gameOver = () => {
    
    this.setState({ count: this.state.count = 0, clicked: this.state.clicked = [] })
    this.state.character.sort(() => Math.random() - 0.5)

    alert("Sorry you Lose")
  }

  handleClick = event => {

    const name = event.target.id;
    const clicked = this.state.clicked;
    console.log(name)
    if(clicked.indexOf(name) === -1){
      clicked.push(name)
      console.log(clicked)
      this.correct();
      if(clicked.length === 12){
        this.setState({ count: this.state.count = 0, clicked: this.state.clicked = [] })
        this.state.character.sort(() => Math.random() - 0.5)
        alert("you win")


      }
    }
    else {
      this.gameOver();

    }
    
  };

  correct = () => {
    this.setState({ count: this.state.count + 1 });
    this.state.character.sort(() => Math.random() - 0.5)
  }
	
  render() {
    return (
      <Wrapper>
        <Title 
          count={this.state.count}
        />
        {this.state.character.map(character => (
          <CharacterCard 
            handleClick={this.handleClick}
            correct={this.correct}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }

}

export default App;

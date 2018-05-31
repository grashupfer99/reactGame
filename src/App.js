import React, { Component } from 'react';
import Main from './styles';

class App extends Component {
  state = {};
  render() {
    const { Title } = Main;
    return (
      <Main>
        {/* ModalContainer*/}
        <Title>
          <p>LTC React Game</p>
        </Title>
        {/* GameHeader  player vs player*/}
        {/* ScoreContainer*/}
        {/* Timer ??? */}
        {/* GameContainer*/}
      </Main>
    );
  }
}

export default App;

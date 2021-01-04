import  React, { Component } from "react";

import api from "../../services/api";

class Home extends Component {
  state = {
    characters: [],
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
  
    const response = await api.get(`characters/?charId=${id}`);

    const data = response.data.map(character => ({
      ...character
    }));

    this.setState({ characters: data });
  }

  render() {
    const { characters } = this.state;

    return (
      <>
        {characters.map(character => (
          <li key={character.id}>
            <span>
            {character.name}
            </span>
          </li>
        ))}
      </>
    );
  }
}

export default Home;

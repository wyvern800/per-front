import React, { Component } from "react";

import api from "../../services/api";
import Loading from "../../assets/components/Loading";

class About extends Component {
  state = {
    character,
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`characters/i?charId=${id}`);

    console.log(this.props.match.params.id);

    this.setState({ character: response.data});
  }

  render() {
    const { character } = this.state.props;

    return (
      <>
        <div className="div-characters-list">
          <>
            {character.name}
          </>
        </div>
      </>
    );
  }
}

export default About;

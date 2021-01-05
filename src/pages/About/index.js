import React, { Component } from "react";

import api from "../../services/api";
import Loading from "../../assets/components/Loading";

class About extends Component {
  state = {
    characters: [],
    loading: true,
  };

  async componentDidMount() {
    const { slug } = this.props.match.params;

    const response = await api.get(`characters/i?slug=${slug}`);

    this.setState({ characters: response.data, loading: false });
  }

  render() {
    const { characters, loading } = this.state;

    return (
      <>
        <div className="div-characters-list">
          {loading ? <Loading /> : 
          <>
          <h1 className="infoCharName">{characters.name}</h1>
          </>}
        </div>
        <div>
        </div>
      </>
    );
  }
}

export default About;

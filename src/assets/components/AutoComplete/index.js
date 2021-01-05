import React, { Component } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import api from "../../../services/api";

const handleOnSearch = (string, cached) => {
  // onSearch returns the string searched and if
  // the values are cached. If the values are cached
  // "cached" contains the cached values, if not, returns false
  console.log(string, cached);
};

const handleOnSelect = (item) => {
  // the item selected
  console.log(item);
};

const handleOnFocus = () => {
  console.log("Focused");
};

class AutoComplete extends Component {
  state = {
    items: []
  };
  
  async componentDidMount() {
    const response = await api.get(`characters`);

    const data = response.data.map((item) => ({
      ...item,
    }));

    this.setState({ items: data });
  }

  render() {
    const { items, loading } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <div style={{ width: 400 }}>
            <ReactSearchAutocomplete
              items={items}
              onSearch={handleOnSearch}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              autoFocus
            />
          </div>
        </header>
      </div>
    );
  }
}

export default AutoComplete;

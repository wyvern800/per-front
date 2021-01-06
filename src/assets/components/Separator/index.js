import React, { Component } from 'react';

export default class Separator extends Component {
  render() {
    const { height } = this.props;

    return(
      <div style={{height: height + 'px'}} />
    );
  }
}
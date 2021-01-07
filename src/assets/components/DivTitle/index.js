import React, { Component } from 'react';

import { TitleWrapper } from './styles';

export default class DivTitle extends Component {
  render() {
    const { text } = this.props;

    return (
      <>
        <TitleWrapper>
          <h3>{text}</h3>
        </TitleWrapper>
      </>
    );
  }
}

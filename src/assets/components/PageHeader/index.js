import React, { Component } from "react";
import { HeaderWrapper } from './styles';

export default class PageHeader extends Component {
  async componentDidMount() {}

  render() {
    const { titleOne, titleTwo, descOne, descTwo } = this.props;

    return (
      <>
        <HeaderWrapper>
          <div>
            <span className="fadeIn-fast">
              {titleOne} <span className="pink">{titleTwo}</span>
            </span>
            <p className="fadeIn-slow">
              {descOne}
              <span className="gold"> {descTwo}</span>
            </p>
          </div>
        </HeaderWrapper>
      </>
    );
  }
}

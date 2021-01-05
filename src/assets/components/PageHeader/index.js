import React, { Component } from "react";

class PageHeader extends Component {
  async componentDidMount() {}

  render() {
    const { titleOne, titleTwo, descOne, descTwo } = this.props;

    return (
      <>
        <div className="box-home">
          <div className="box-text">
            <span className="fadeIn-fast">
              {titleOne} <span className="pink">{titleTwo}</span>
            </span>
            <p className="fadeIn-slow">
              {descOne}
              <span className="gold"> {descTwo}</span>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default PageHeader;

import React, { Component } from 'react';
import { DivMap } from './styles';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container'

export default class Map extends Component {
  render() {
    return (
      <>
        <DivMap>
        <Container>
          <Badge className="badge" className="a">1</Badge>
          <Badge className="badge" className="b">2</Badge>
          <Badge className="badge" className="c">3</Badge>
          <Badge className="badge" className="d">4</Badge>
          <Badge className="badge" className="e">4</Badge>
          </Container>
        </DivMap>
      </>
    );
  }
}

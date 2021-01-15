import React, { Component } from 'react';
import erbsApi from '../../services/erbsApi';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import PageHeader from '../../assets/components/PageHeader';
import SearchBarPlayers from '../../assets/components/SearchBarPlayers';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination'

import {
  HighscoresPageWrapper,
  SearchBarDiv,
  GameModeFilter,
  HighscoresListDiv,
  AdsDiv,
  AdsDiv2,
} from './styles';

export default class Highscores extends Component {
  state = {
    players: [],
    pagination: [],
  };

  async componentDidMount() {
    const response = await erbsApi.get(`rank/top/0/1`, {
      headers: {
        'x-api-key': `${process.env.ERBS_API_TOKEN}`,
      },
    });

    this.setState({ players: response.data });

    console.log(this.state.players);
  }

  render() {
    return (
      <>
        <Row>
          <Col sm>
            <PageHeader
              titleOne="Highscores"
              descOne="Veja como estão as estatísticas dos jogadores!"
            />
          </Col>
        </Row>
        <HighscoresPageWrapper>
          <Row>
            <Col sm={9}>
              <SearchBarDiv>
                <SearchBarPlayers />
              </SearchBarDiv>
            </Col>
            <Col>
              <GameModeFilter>
                <Button variant="light">Solos</Button>
                <Button variant="light">Duos</Button>
                <Button variant="light">Trios</Button>
              </GameModeFilter>
            </Col>
          </Row>
          <Row>
            <Col sm={9}>
              <HighscoresListDiv>
                <Table striped bordered hover size="sm" variant="dark">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Username</th>
                      <th>League</th>
                      <th>Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Arenque</td>
                      <td>Master</td>
                      <td>1.200.300</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Master</td>
                      <td>1.100.000</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Arenque</td>
                      <td>Master</td>
                      <td>1.000.000</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Dharoka</td>
                      <td>Master</td>
                      <td>999.999</td>
                    </tr>
                  </tbody>
                </Table>
              </HighscoresListDiv>
            </Col>
            <Col>
              <AdsDiv>Anúncio</AdsDiv>
            </Col>
          </Row>
          <Row>
            <Col>
              <AdsDiv2>Anúncio 2</AdsDiv2>
            </Col>
          </Row>
        </HighscoresPageWrapper>
      </>
    );
  }
}

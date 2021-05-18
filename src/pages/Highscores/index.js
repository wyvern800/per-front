import React, { Component } from 'react';
import erbsApi from '../../services/erbsApi';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import PageHeader from '../../assets/components/PageHeader';
import SearchBarPlayers from '../../assets/components/SearchBarPlayers';
import Table from 'react-bootstrap/Table';
import Pagination from '../../assets/components/Pagination';
import Loading from '../../assets/components/Loading';
import paginationFactory from 'react-bootstrap-table2-paginator';

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
    scoreMode: 1,
    players: [],
    loading: false,
  };

  componentDidMount() {
    const getPlayers = async () => {
      this.setState({ loading: true });
      const { scoreMode } = this.state;

      const response = await erbsApi.get(`rank/top/1/${scoreMode}`, {
        headers: {
          'x-api-key': `${process.env.ERBS_API_TOKEN}`,
        },
      });

      this.setState({ players: response.data.topRanks, loading: false });

      console.log(this.state.players);
    };
    getPlayers();
  }

  handleSoloClick(scoreMode) {
    console.log('Changed score to :' + scoreMode);
  }

  render() {
    const { players, loading } = this.state;

    return loading ? (
      <>
        <Loading />
      </>
    ) : (
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
                <Button variant="light" onClick={() => handleSoloClick(1)}>
                  Solos
                </Button>
                <Button variant="light" onClick={() => handleSoloClick(2)}>
                  Duos
                </Button>
                <Button variant="light" onClick={() => handleSoloClick(3)}>
                  Trios
                </Button>
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
                      <th>MMR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {players.map((player) => (
                      <tr key={player.userNum}>
                        <td>{player.rank}</td>
                        <td>{player.nickname}</td>
                        <td>{player.mmr}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <BootstrapTable keyField='userNum' data={ players } columns={ ["#", "Rank", "Nickname", "MMR"] } pagination={ paginationFactory() } />
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

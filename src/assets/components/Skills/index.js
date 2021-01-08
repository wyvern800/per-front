import React, { Component } from 'react';
import { AboutSkills } from './styles';
import Table from 'react-bootstrap/Table';

export default class SkillsBar extends Component {
  render() {
    return (
      <>
        <AboutSkills>
          <Table striped bordered hover variant="dark">
            <tbody>
              <tr>
                <td>Q</td>
              </tr>
              <tr>
                <td>Imagem</td>
              </tr>
            </tbody>
          </Table>
        </AboutSkills>
      </>
    );
  }
}

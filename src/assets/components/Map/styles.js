import styled from 'styled-components';
import imgmap from '../../../assets/map.png';

export const DivMap = styled.div`
  div {
    background-image: url(${imgmap});
  background-repeat: no-repeat;
    display: grid;
    grid-template-columns: 31px 31px 31px 31px 31px 31px 31px 31px 31px 31px;
    grid-template-rows: 100px 100px 100px;
    gap: 0px 0px;
    grid-template-areas:
      '. . . . . . . . . .'
      'b . . . . . . . . .'
      '. . . . . . . . . .'
      '. . . . . . . . . .';
      .badge {
        width: 25px;
        height: 30px;
        text-align: center;
        font-size: 20px;
        color: red;
        background-color: white;
      }
      .a {
        grid-area: a;
      }
      .b {
        grid-area: b;
      }
  }
`;

import styled from 'styled-components';

export const DivMap = styled.div`
  margin: 10px;
  position: relative;
  display: inline-block;

  img {
    max-width: 100%;
    display: block;
  }

  .box {
    height: 5%;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.6);
    padding-right: 5px;
    padding-left: 4px;

    span {
      font-size: 13px;
    }

    span.routeNumber {
      color: gold;
      padding-right: 4px;
    }

    span.locationName:hover {
      color: gold;
      opacity: 1;
    }
  }

  #map01 {
    top: 13%;
    left: 42%;
  }

  #map02 {
    top: 29%;
    left: 15%;
  }

  #map03 {
    top: 27%;
    left: 79%;
  }

  #map04 {
    top: 32%;
    left: 57%;
  }

  #map05 {
    top: 38%;
    left: 33%;
  }

  #map06 {
    top: 48%;
    left: 41%;
  }

  #map07 {
    top: 50%;
    left: 11%;
  }

  #map08 {
    top: 40%;
    left: 6%;
  }

  #map9 {
    top: 55%;
    left: 74%;
  }

  #map10 {
    top: 65%;
    left: 9%;
  }

  #map11 {
    top: 63%;
    left: 34%;
  }

  #map12 {
    top: 66%;
    left: 65%;
  }

  #map13 {
    top: 75%;
    left: 22%;
  }

  #map14 {
    top: 76%;
    left: 53%;
  }

  #map15 {
    top: 78%;
    left: 76%;
  }

  #map16 {
    top: 90%;
    left: 47%;
  }
`;

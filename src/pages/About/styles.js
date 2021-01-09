import styled from 'styled-components';

export const CharacterPageWrapper = styled.div`
  justify-content: space-evenly;
  flex-direction: row;
  color: white;
`;

export const CharactersList = styled.div`
  margin-top: 30px;

  ul {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  li {
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    list-style-type: none;
    color: white;

    img {
      background-color: rgba(128, 128, 128, 0.103);
      width: 170px;
      height: 231px;
    }
  }
`;

export const LeftContainer = styled.div`
  //border: 1px solid white;
  color: white;
  display: flex;
  flex-direction: column;
`;

export const MiddleContainer = styled.div`
  //border: 1px solid white;
  color: white;
  display: flex;
  flex-direction: column;
`;

export const RightContainer = styled.div`
  //border: 1px solid white;

  img {
    width: 345px;
  }
`;

export const CharacterLargePortrait = styled.div`
  background-color: rgba(218, 219, 221, 0.1);

  img {
    width: 100%;
  }
`;

export const CharacterStats = styled.div`
  background-color: rgba(218, 219, 221, 0.1);
`;

export const CharacterChart = styled.div`
  background-color: rgba(218, 219, 221, 0.1);
`;

export const CharacterSkills = styled.div`
  background-color: rgba(218, 219, 221, 0.1);

  div {
    display: flex;
    justify-content: center;

    div {
      border: 1px solid rgba(255, 255, 255, 0.4);
      margin: 5px;

      span {
        font-family: 'Arial', sans-serif;
        font-size: 12px;
        margin-top: 29px;
        margin-left: 27px;
        position: absolute;
        padding-left: 5px;
        padding-right: 5px;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 5px;
      }

      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`;

export const CharacterBuilds = styled.div`
  background-color: rgba(218, 219, 221, 0.1);
  padding-bottom: 5px;

  div.buildsDiv {
    margin: 10px;
    display: flex;
    justify-content: center;
  }
`;

export const CharacterMap = styled.div`
  background-color: rgba(218, 219, 221, 0.1);
  min-height: 480px;

  div {
    display: flex;
    justify-content: center;
  }
`;

export const WeaponsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WeaponsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  div {
    border: 1px solid gray;
    width: 45px;
    height: 45px;
    margin: 5px;

    img {
      max-width: 43px;
      max-height: 43px;
    }
  }
`;

export const WeaponInfo = styled.div`
  display: flex;
  justify-content: center;
`;

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
    //background-image: url(http://www.clker.com/cliparts/W/0/g/a/W/E/map-pin-red.svg);
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

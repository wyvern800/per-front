import styled, { keyframes, css } from 'styled-components';

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
      cursor: pointer;
      //border: 1px solid white;
      width: 170px;
      height: 231px;
      opacity: 0.6;
      transition: 0.3s;
    }

    img:hover {
      cursor: pointer;
      opacity: 1;
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

  p {
    color: yellow;
  }

  div {
    display: flex;
    justify-content: center;

    li {
      img {
        width: 50px;
        height: 50px;
        border-color: 1px solid white;
      }
    }
  }
`;

export const CharacterBuilds = styled.div`
  background-color: rgba(218, 219, 221, 0.1);
`;

export const CharacterMap = styled.div`
  background-color: rgba(218, 219, 221, 0.1);
  min-height: 480px;

  div {
    display: flex;
    justify-content: center;
  }
`;

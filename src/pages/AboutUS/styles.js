import styled from 'styled-components';

export const AboutStyle = styled.div`
  .first-div {
    display: flex;
    justify-content: center;
    color: white;
  }
  .first-div h1 {
    font-size: 50px;
    animation: reveal 3000ms ease-in-out forwards 200ms,
      glow 2500ms linear 2000ms;
  }

  p {
    font-size: 20px;
    margin-top: 15px;
  }

  .fadeIn {
    -webkit-animation: fadeIn 4.5s ease-in-out;
    -moz-animation: fadeIn 4.5s ease-in-out;
    -o-animation: fadeIn 4.5s ease-in-out;
    animation: fadeIn 4.5s ease-in-out;
  }

  .team {
    display: flex;
    margin-top: 30px;
    justify-content: center;
  }

  .card {
    margin-right: 5px;
    margin-left: 5px;
  }

  @keyframes reveal {
    80% {
      letter-spacing: 1px;
    }
    100% {
      background-size: 100% 100%;
    }
  }
  @keyframes glow {
    40% {
      text-shadow: 0 0 8px #fff;
    }
  }
  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

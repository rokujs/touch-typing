import css from "styled-jsx/css"
import { colors, size } from "s/theme"

export default css`
  main {
    min-height: 93vh;
    max-width: 100vw;
    background-color: ${colors.bg};
    padding: 5rem 30rem;
  }

  h1 {
    font-size: 6rem;
    color: ${colors.tertiary};
    text-align: center;
    animation-name: fading;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
  }

  main > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 20rem;
  }

  h3 {
    font-size: 2rem;
    color: ${colors.textYellow};
    text-align: center;
    font-style: italic;
  }

  span {
    font-size: 5rem;
    color: ${colors.text};
  }

  small {
    font-size: 3rem;
    margin-left: 0.5rem;
    color: ${colors.textYellow};
  }

  section {
    height: 10rem;
    border-bottom: 0.6rem solid ${colors.textYellow};
    animation-name: border_bottom;
    animation-duration: 1s;
  }

  .bottons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${colors.tertiary};
    padding: 3rem 0;
  }

  @keyframes fading {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes border_bottom {
    0% {
      border-bottom: 0 solid ${colors.textYellow};
    }
    100% {
      border-bottom: 0.8rem solid ${colors.textYellow};
    }
  }
`

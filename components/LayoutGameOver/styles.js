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
`

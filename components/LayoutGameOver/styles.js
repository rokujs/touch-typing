import css from "styled-jsx/css"
import { colors, size } from "s/theme"

export default css`
  main {
    min-height: 93vh;
    max-width: 100vw;
    background-color: ${colors.bg};
    padding: 10rem 25rem;
  }

  h1 {
    font-size: 5rem;
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
    margin-top: 10rem;
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
  }

  .bottons {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`

import css from "styled-jsx/css"
import { colors, size } from 's/theme'

export default css`
  div {
    background-color: ${colors.tertiary};
    border-radius: 1rem;
    position: relative;
  }

  div > span {
    font-size: 2rem;
    color: ${colors.text};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .info {
    position: absolute;
    z-index: 1;
    background-color: ${colors.bgExtra};
    padding: 1rem 2rem;
    display: none;
    bottom: 120%;
    left: -25%;
  }

  .info > p {
    font-size: ${size.normal};
    color: ${colors.text};
  }

  .info > p > span {
    font-weight: bold;
    margin-left: 0.6rem;
  }

  div:hover > .info {
    display: block;
  }

  .active {
    background-color: ${colors.primary};
  }

  .active > span {
    color: ${colors.textYellow};
  }

  .enter {
    grid-row: 2 / 4;
    grid-column-start: 14;
  }

  .shift {
    grid-row: 4;
    grid-column: 13/15;
  }

  .space {
    grid-row: 5;
    grid-column: 4 / 10;
  }
`

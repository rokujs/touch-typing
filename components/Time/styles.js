import css from "styled-jsx/css"
import { colors, size } from "s/theme"

export default css`
  .container {
    margin-top: 2rem;
    width: 100%;
    height: 20rem;
    position: relative;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 20rem;
    width: 20rem;
    z-index: 1;
  }

  svg circle {
    fill: none;
    stroke-width: 12;
    transform: translate(-50%, -50%);
    stroke-dasharray: 590;
    stroke-dashoffset: 590;
    stroke-linecap: round;
  }

  svg circle:nth-child(1) {
    stroke-dashoffset: 0;
    stroke: #f1e2ff;
  }

  svg circle:nth-child(2) {
    stroke-dashoffset: calc(590 - (590 * 0.87));
    stroke: ${colors.textYellow};
  }

  .circle {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    background-color: ${colors.tertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .circle > span {
    font-size: 6rem;
    color: ${colors.textYellow};
  }

  .circle > span > small {
    font-size: ${size.normal};
    font-weight: bold;
  }
`

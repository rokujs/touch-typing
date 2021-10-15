import css from "styled-jsx/css"

export default css`
  div {
    background-color: #ccc;
    border-radius: 1rem;
    position relative;
  }

  span {
    font-size: 1.8rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

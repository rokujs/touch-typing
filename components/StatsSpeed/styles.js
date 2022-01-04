import css from "styled-jsx/css"
import { colors, size } from 's/theme'

export default css`
  h5 {
    color: ${colors.secondary};
    font-size: ${size.big};
  }

  .description {
    margin: 1.4rem 0;
  }

  .description > p {
    font-size: ${size.normal};
    color: ${colors.textYellow};
  }

  .stats {
    padding-left: 1.4rem;
  }

  .stats > ul {
    list-style: none;
  }

  .stats > ul > li {
    font-size: ${size.normal};
    color: ${colors.white};
    font-weight: 500;
    margin-bottom: 0.8rem;
  }

  .stats > ul > li > span {
    font-weight: bold;
    margin-left: 1rem;
  }

`

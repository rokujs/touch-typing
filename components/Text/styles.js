import css from 'styled-jsx/css'
import { colors, size } from 's/theme'

export default css`
  div {
    display: inline-block;
    width: 1.6rem;
    height: 30px;
    text-align: center;
  }

  span {
    font-size: ${size.normal};
    color: ${colors.primary};
    font-weight: bold;
  }
`
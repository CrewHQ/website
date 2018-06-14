import styled from 'styled-components'
import typographyStyles from '../util/typographyStyles'
import { space, color, fontSize } from 'styled-system'
import tag from 'clean-tag'

export default styled(tag).attrs({ color: ({ color = 'text' }) => color })`
  ${typographyStyles('label')};
  ${space};
  ${color};
  ${fontSize};
  text-transform: uppercase;
`

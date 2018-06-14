import styled from 'styled-components'
import typographyStyles from '../util/typographyStyles'
import { space, color, fontSize } from 'styled-system'
// component that makes sure the space and color properties do not end up in the DOM:
import tag from 'clean-tag'

export default styled(tag).attrs({ color: ({ color = 'text' }) => color })`
  ${typographyStyles('body')};
  ${space};
  ${color};
  ${fontSize};
`

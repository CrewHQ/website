import styled from 'styled-components'
import typographyStyles from '../util/typographyStyles'
import { space, color, fontSize } from 'styled-system'

export default styled.h1.attrs({
  color: props => props.color || 'secondaryText'
})`
  ${props => rest => typographyStyles(props.typographyStyle || 'headline')};
  ${space};
  ${color};
  ${fontSize};
`

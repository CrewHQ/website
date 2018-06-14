// This long button which contains a line of text.

import Button from './Button'

export default Button.extend.attrs({
  bg: 'secondaryAccent',
  color: 'primary',
  p: 1,
  my: 4,
  typographyStyle: 'label'
})`
  text-transform: uppercase;
`

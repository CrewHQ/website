import React from 'react'
import { View } from '../Primitives'
import Label from '../Label'
import Headline from '../Headline'
import Text from '../Text'

const Container = View.extend.attrs({ pl: 4 })`
  border-left: 3px solid currentColor;
`

export default ({ label, headline, body, active, pt }) => (
  <Container pt={pt} active={active} color={active ? 'primary' : 'border'}>
    <Label>{label}</Label>
    <Headline mt={[1, 2, 2]} mb={[1, 2, 2]} typographyStyle="subhead">
      {headline}
    </Headline>
    <Text fontSize={[2, 3, 3]}>{body}</Text>
  </Container>
)

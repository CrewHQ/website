// component met Label, Headline, Text (body)
import React from 'react'
import { View } from './Primitives'
import Label from './Label'
import Headline from './Headline'
import Text from './Text'
export default ({ label, headline, body }) => (
  <View my={3}>
    <Label>{label}</Label>
    <Headline mt={[1, 2, 2]} mb={[1, 2, 2]} fontSize={[3, 4, 5]}>
      {headline}
    </Headline>
    <Text fontSize={[2, 3, 3]}>{body}</Text>
  </View>
)

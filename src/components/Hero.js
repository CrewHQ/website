import React from 'react'
import SideBySide from './SideBySide'
import { View } from './Primitives'
import Headline from './Headline'
import Text from './Text'
import LineButton from './LineButton'
import Circle from './Circle'

const HeroHeadline = Headline.extend`
  text-transform: capitalize;
`

export default () => (
  <SideBySide>
    <View>
      <HeroHeadline>Fringilla blandit morbi turpis nec</HeroHeadline>
      <Text>
        Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
      </Text>
      <LineButton>
        Nulla metus metus, ullamcorper vel, tincidunt sed.
      </LineButton>
    </View>
    <View>
      <Circle />
    </View>
  </SideBySide>
)

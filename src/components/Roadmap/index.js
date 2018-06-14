import React, { Fragment } from 'react'
import { View } from '../Primitives'
import Headline from '../Headline'
import Phase from './Phase'

import roadmapData from '../../roadmapData'

export default () => (
  <View mb={2}>
    <Headline>Roadmap!</Headline>
    {roadmapData.map((phase, index) => (
      <Phase
        {...phase}
        key={index}
        pt={index === 0 ? 2 : 5}
        active={index === 0}
      />
    ))}
  </View>
)

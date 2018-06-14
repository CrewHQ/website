import React from 'react'

import { View } from '../components/Primitives'
import { Body, Content } from '../components/Layout'
import Hero from '../components/Hero'
import SideBySide from '../components/SideBySide'
import Label from '../components/Label'
import Catchphrase from '../components/Catchphrase'
import Text from '../components/Text'
import Explainer from '../components/Explainer'
import Circle from '../components/Circle'
import Roadmap from '../components/Roadmap'

const LabelCentered = Label.extend`
  text-align: center;
`

export default () => (
  <Body>
    <Content>
      <Catchphrase mb={5}>Roadmap</Catchphrase>
      <SideBySide reverse={false}>
        <Explainer
          label="Nibh vel?"
          headline="Aliquet efficitur nibh"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque aliquet efficitur nibh vel ullamcorper. Sed sem
                justo, convallis."
        />
        <View>
          <Roadmap />
        </View>
      </SideBySide>
      <LabelCentered>Consectetur adipiscing elit</LabelCentered>
      <Catchphrase mt={2} fontSize={5}>
        Stay in touch!
      </Catchphrase>
    </Content>
  </Body>
)

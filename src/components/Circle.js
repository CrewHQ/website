import React from 'react'
import styled from 'styled-components'
import tag from 'clean-tag'
import { space } from 'styled-system/dist/styles'

const Circle = styled(tag)`
  width: 50vmin;
  height: 50vmin;
  background-color: rgb(227, 244, 254);
  border-radius: 9999px;
  margin-left: auto;
  margin-right: auto;
  ${space};
`

export default () => <Circle my={2} />

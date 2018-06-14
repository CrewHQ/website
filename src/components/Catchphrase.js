import React from 'react'
import Headline from './Headline'

export default Headline.extend.attrs({
  fontSize: props => props.fontSize || [2, 3, 4],
  color: 'secondaryText'
})`
  text-align: center;
  max-width: 24em;
  margin-left: auto;
  margin-right: auto;
`

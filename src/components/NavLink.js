import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { typographyStyles } from '../util/typographyStyles'
import { space } from 'styled-system'

export default styled(({ py, px, mr, pb, ...props }) => (
  <NavLink {...props} />
)).attrs({ py: 2, px: 0, mr: 4 })`
  ${typographyStyles('body')};
  ${space};
  transition: color 0.2s, border-bottom-color 0.2s;
  color: ${({ theme: { colors } }) => colors.text};
  text-decoration: none;
  border-bottom: 1px solid;
  border-bottom-color: transparent;
  &.active {
    color: ${({ theme: { colors } }) => colors.primary};
    /* border-bottom-color: currentColor; */
  }
  &:first-child {
    margin-left: 0;
  }
`

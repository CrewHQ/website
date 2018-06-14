import React from 'react'
import PropTypes from 'prop-types'
import { Header } from '../components/Layout'

import Nav from './Nav'

import Button from './Button'
import { View } from './Primitives'

import tag from 'clean-tag'

const Container = View.withComponent(tag).extend.attrs({
  py: 3,
  color: 'primary'
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Navigation = View.extend``

const ActionButtons = View.extend``

const PageHeader = ({ title, subtitle, backgroundImage }) => (
  <Header>
    <Container>
      <Navigation>
        <Nav />
      </Navigation>
      <ActionButtons>
        <Button>Sign up for Crew</Button>
      </ActionButtons>
    </Container>
  </Header>
)

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader

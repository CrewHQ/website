import React from 'react'
import ThemeProvider from '../components/ThemeProvider'
import { Container, Footer } from 'react-holy-grail-layout'
import PageHeader from '../components/PageHeader'
import { injectGlobal } from 'styled-components'

injectGlobal`
    body {
        margin: 0;
        padding: 0;
    }
`

const Layout = ({ children }) => (
  <ThemeProvider>
    <Container>
      <PageHeader />
      {children()}
      <Footer style={{ minHeight: 70 }} bg="accent" />
    </Container>
  </ThemeProvider>
)

export default Layout

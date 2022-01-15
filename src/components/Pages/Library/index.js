import React from 'react'
import { Container, Header, Line } from './styles'
import Gallery from '../../UI/Gallery/index'

function Library(props) {
  return (
    <Container>
      <Header>
        <h1>Library</h1>
      </Header>
      <Line />
      <Gallery />
    </Container>
  )
}
export default Library

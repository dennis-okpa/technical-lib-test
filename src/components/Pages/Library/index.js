import React, { useState } from 'react'
import { Container, Header, Line } from './styles'
import Gallery from '../../UI/Gallery/index'
import Modal from '../../UI/Modal/index'

export const ViewerContext = React.createContext()

function Library(props) {
  const [img, setImage] = useState(null)

  const handleClose = () => {
    setImage(null)
  }

  return (
    <Container>
      <Header>
        <h1>Library</h1>
      </Header>
      <Line />
      <ViewerContext.Provider value={setImage}>
        <Gallery />
      </ViewerContext.Provider>
      {img && <Modal img={img} handleClose={handleClose} />}
    </Container>
  )
}
export default Library

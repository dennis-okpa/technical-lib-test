import React from 'react'
import { Overlay, Img } from './styles'

function Modal({ img, handleClose }) {
  return (
    <Overlay onClick={handleClose}>
      <Img src={img} alt="large view" />
    </Overlay>
  )
}
export default Modal

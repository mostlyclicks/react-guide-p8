import React from 'react'
import styled from 'styled-components'

const ErrorModal = () => {
  return (
    <Overlay>
      <ModalMessage>Message</ModalMessage>
    </Overlay>
  )
}


const Overlay = styled.div`
  position:absolute;
  left:0;
  top:0;
  z-index:1;
  width:100vw;
  height:100vh;
  background-color:rgba(0,0,0,.5);
`

const ModalMessage = styled.div`
  display:flex;
  z-index:2;
  width:400px;
  height:200px;
  background-color:green;

`

export default ErrorModal


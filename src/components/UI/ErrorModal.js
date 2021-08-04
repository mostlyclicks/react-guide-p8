import React from 'react'
import styled from 'styled-components'

const ErrorModal = () => {
  return (
    <Overlay>
      <div>Message</div>
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

export default ErrorModal


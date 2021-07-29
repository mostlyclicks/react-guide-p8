import React from 'react'
import styled from 'styled-components'

const User = () => {
  return (
    <StyledUser>
      <p>Bill (Age 31 years old)</p>
    </StyledUser>
  )
}

export default User

const StyledUser = styled.div`
  width:100%;
  border:1px solid gray;
  padding:.5rem;
  text-align:left;
  margin:0 auto;

  @media (min-width:768px) {
    width:50%;
  }
`
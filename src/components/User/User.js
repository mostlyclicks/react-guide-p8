import React from 'react'
import Card from '../UI/Card'
import styled from 'styled-components'

const User = () => {
  return (
    <Card>
      <StyledUser>
        <p>Bill (Age 31 years old)</p>
      </StyledUser>
    </Card>
  )
}

export default User

const StyledUser = styled.div`
  border-radius:4px;
  border:1px solid gray;
  padding:.75rem;
  text-align:left;
  
`
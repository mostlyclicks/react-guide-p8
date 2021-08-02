import React from 'react'
import Card from '../UI/Card'
import styled from 'styled-components'

const User = (props) => {
  return (
    <Card>
      
      <StyledUser>
        <p>{props.userItem.name} - {props.userItem.age}</p>
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
import React from 'react'
import styled from 'styled-components'

const Card = (props) => {

  const classes = `${props.className}`

  return (
    <StyledCard className={classes}>
      {props.children}
    </StyledCard>
  )
}

export default Card

const StyledCard = styled.div`
  width:100%;
  padding:18px;
  background-color:#fff;
  border-radius:7px;
  margin:0 auto;

  @media (min-width:768px) {
    width:50%;
  }
`

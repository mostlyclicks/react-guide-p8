import React from 'react'

const Button = () => {

  const buttonHandler = (props) => {

    
    console.log('button clicked in button component')
    
  }


  return (
    <button onClick={buttonHandler}>
      Click Me!
    </button>
  )
}

export default Button

import React from 'react'
import Card from './Card'
import Button from './Button'
import styled from 'styled-components'
import classes from './ErrorModal.module.css'

const ErrorModal = (props) => {
  return (
    <div>
    <div className={classes.backdrop}>
    
    </div>
      <Card className={classes.modal}>
        
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.action}>
            <Button>Okay</Button>
          </footer>
        
      </Card>
    </div>
    
      
    
  )
}


// const Overlay = styled.div`
//   position:absolute;
//   left:0;
//   top:0;
//   z-index:1;
//   width:100vw;
//   height:100vh;
//   background-color:rgba(0,0,0,.5);
// `

// const ModalMessage = styled.div`
//   display:flex;
//   z-index:2;
//   width:400px;
//   height:200px;
//   background-color:green;

// `

export default ErrorModal


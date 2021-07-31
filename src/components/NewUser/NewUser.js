import React, { useState } from 'react'
import styled from 'styled-components'
import Card from '../UI/Card'
import Button from '../UI/Button'


const NewUser = () => {

  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log('button clicked')
    console.log(enteredUsername, enteredAge)
    //props funtion with args?
  }

  const usernameHandler = (event) => {
    setEnteredUsername(event.target.value)
    console.log(enteredUsername)
    //props.usernamefunction(username)
  }

  const ageHandler = (event) => {
    setEnteredAge(event.target.value)
    console.log(enteredAge)
    //props.agefunction(age)
  }

  return (
    <div>
      <Card>
        <UserForm onSubmit={addUserHandler}>
          <div className="form-control">
            <label htmlFor="username">Username:</label>  
            <input id="username" type="text" value={enteredUsername} onChange={usernameHandler}/>
          </div>
          <div className="form-control">
            <label htmlFor="age">Age (Years):</label>  
            <input id="age" type="number" value={enteredAge} onChange={ageHandler} />
          </div>
          <Button type="submit">Add New User</Button>
          
        </UserForm>
      </Card>
    </div>
    
  )
}

export default NewUser

const UserForm = styled.form`
  display:flex;
  flex-wrap:wrap;


  input {
    
  }

  label {
    display:block;
    text-align:left;
  }

`



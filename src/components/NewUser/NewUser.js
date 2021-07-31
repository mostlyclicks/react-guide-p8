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
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      console.log('please try again')
      return
    }
    if (+enteredAge < 1) {
      console.log('not valid age')
      return
    }
    console.log(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
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

  // const checkName = (name) => {
  //   if (!name) {
  //     return 'please enter name'
  //   } else {
  //     return name
  //   }
  // }

  // const checkAge = (age) => {
  //   if (age < 1) {
  //     console.log('need age')
  //     return 'please enter an age'
  //   } else {
  //     console.log('age ok')
  //     return age
  //   }
  // }

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



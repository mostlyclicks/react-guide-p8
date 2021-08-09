import React, { useState } from 'react'
import styled from 'styled-components'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'


const NewUser = (props) => {

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
    //props.somefunctionthatsetsUserStatewithargs
    const newUserData = {name: enteredUsername, age: enteredAge}
    props.onAddUser(newUserData)

    //then reset the state
    setEnteredUsername('')
    setEnteredAge('')
    
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
     <ErrorModal title="an error occured" message="something"/>
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



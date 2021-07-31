import React from 'react'
import styled from 'styled-components'
import Card from '../UI/Card'
import Button from '../UI/Button'


const NewUser = () => {

  const addUserHandler = (event) => {
    event.preventDefault();


  }

  return (
    <div>
      <Card>
        <UserForm onSubmit={addUserHandler}>
          <div className="form-control">
            <label htmlFor="username">Username:</label>  
            <input id="username" type="text" value="" />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age (Years):</label>  
            <input id="age" type="number" value="" />
          </div>
          <button type="submit">Add User</button>
          
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



import React from 'react'
import styled from 'styled-components'
import Card from '../UI/Card'
import Button from '../UI/Button'


const NewUser = () => {
  return (
    <div>
      <Card>
        <UserForm>
          <div className="form-control">
            <label>Username:</label>  
            <input type="text" value="" />
          </div>
          <div className="form-control">
            <label>Age</label>
            <input type="text" value="" />
          </div>
          <Button>Submit</Button>
        </UserForm>
      </Card>
    </div>
    
  )
}

export default NewUser

const UserForm = styled.form`
  input[text] {
    width:auto;
  }

`



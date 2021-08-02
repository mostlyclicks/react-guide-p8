import React from 'react'
import User from './User'

const UserList = (props) => {

  const users = props.userList

  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={Math.random().toString()}><User userItem={user} /></li>
        )
      })}
    </ul>
  )
}

export default UserList

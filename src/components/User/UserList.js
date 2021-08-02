import React from 'react'
import User from './User'

const UserList = (props) => {

  const users = props.userList

  return (
    <div>
      {users.map((user) => {
        return (
          <User userItem={user} />
        )
      })}
    </div>
  )
}

export default UserList

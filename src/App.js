import React, { useState } from 'react'
import NewUser from './components/NewUser/NewUser'
import UserList from './components/User/UserList'
import './App.css';


  const DUMMY_USERS = [
    {name:'bill', age: 32},
    {name: 'carlos', age: 55},
    {name: 'miyu', age: 5}
  ]

function App() {

  const [users, setUsers] = useState(DUMMY_USERS)

  const addUser = user => {
    setUsers(prevUsers => {
      return [user, ...prevUsers]
    })
  }

  return (
    <div className="App">
      
      <NewUser onAddUser={addUser} />
      <UserList userList={users}/>
    </div>
  );
}

export default App;

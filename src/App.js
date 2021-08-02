import React from 'react'
import NewUser from './components/NewUser/NewUser'
import UserList from './components/User/UserList'
import './App.css';

function App() {

  const users = [
    {name:'bill', age: 32},
    {name: 'carlos', age: 55},
    {name: 'miyu', age: 5}
  ]





  return (
    <div className="App">
      <NewUser />
      <UserList userList={users}/>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import api from './services/api'
import Table from './components/Table'
import './App.css';

function App() {
  const columns = [
    {
    label: "Usuário",
    key: "login"
  },
    {
    label: "Avatar",
    key: "avatar_url"
  },
]
  const [users, setUsers] = useState([])
  useEffect(() => {
    api.get('/users').then(res => setUsers(res.data))
    console.log(users[0])
  }, [users])
  
  return (
    <div className="App">
      <Table columns={columns} data={users} bold={true} />
    </div>
  );
}

export default App;

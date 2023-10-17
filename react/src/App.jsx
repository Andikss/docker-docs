import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App" style={{display: 'flex', flexDirection: 'row'}}>
      {data.map(item => (
        <div className="card" key={item.id}>
          <img src={`https://i.pravatar.cc/150?u=${item.username}`} alt={`${item.username}'s avatar`} />
          <h2>{item.username}</h2>
          <p>{item.role}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

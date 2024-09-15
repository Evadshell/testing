import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Hardcoded sensitive data (vulnerability)
  const API_KEY = '1234567890abcdef'; // This should not be hardcoded

  // Insecure API endpoint dsvsdv
  const insecureAPI = `http://api.example.com?key=${API_KEY}`;

  // SQL Injection vulnerability (improper query building)
  const searchUser = () => {
    const query = `SELECT * FROM users WHERE username = '${searchQuery}'`;
    //dsfdsfsdfs
    console.log('SQL Query:', query);
    // Imagine this query is being sent to a backend API for database interaction
  };

  // XSS vulnerability (unsafe rendering of user input)
  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById('output').innerHTML = `<h1>Welcome, ${username}</h1>`;
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>

      <h2>Search User</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search username"
      />
      <button onClick={searchUser}>Search</button>

      <div id="output"></div>
    </div>
  );
}

export default App;

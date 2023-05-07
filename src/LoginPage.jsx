import React from 'react';
import './login.css';

function LoginPage() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('authToken', Math.random().toString(36).substr(2, 8));
      localStorage.setItem('expirationTime', new Date().getTime() + 60* 60 * 1000);
      window.location.href = '/dashboard';
    } else {
      alert('Login failed, please check the credentials');
    }
  };

  return (
    <div className="container">
      <h1>Blackfrog task</h1>
      <form className="box" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="text" placeholder="Enter username" value={username} onChange={(event) => setUsername(event.target.value)} />
        <input type="password" placeholder="Enter password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;

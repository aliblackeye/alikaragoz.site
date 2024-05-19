'use client';

import { useState } from 'react';

import '@styles/_panel-login.scss';

import { useRouter } from 'next/navigation';

export default function PanelLogin() {
  // Router
  const router = useRouter();

  // States
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Functions
  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the API
    /* fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      }); */

    if (
      process.env.NEXT_PUBLIC_USERNAME !== username ||
      process.env.NEXT_PUBLIC_PASSWORD !== password
    )
      return;

    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);

    // Redirect to the panel
    router.push('/panel/dashboard');
  };

  return (
    <div className="panel-login">
      <form className="panel-login__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="button" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}

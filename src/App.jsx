import React, { useState } from 'react';
import './App.css';

const Userform = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');

  return (
    <div className='card'>
      <h1>Fill Details</h1>
      <h3>Username:</h3>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <h3>Email Address:</h3>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <h3>Phone Number:</h3>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        minLength={10}
        maxLength={10}
      />
      <h3>Date of Birth:</h3>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        required
      />
    </div>
  );
};

export default function App() {
  const [disable, setDisable] = useState(true);

  const toggle = () => {
    setDisable((prevState) => !prevState);
  };

  return (
    <div className='container'>
      <h1>User Details Modal</h1>
      <button type='button' onClick={toggle}>
        Open Form
      </button>
      {!disable && (
        <div className='modal-overlay'>
          <Userform />
        </div>
      )}
    </div>
  );
}
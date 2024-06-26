import React, { useState, useRef, useEffect } from 'react';
import './App.css';

const Userform = ({ toggleSubmit, closeModal }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');

  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeModal]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email. Please check your email address.');
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    if (!dob) {
      alert('Invalid date of birth. Please enter a valid date.');
      return;
    }

    console.log('Form submitted successfully!');
    toggleSubmit(true);
  };

  return (
    <div className='modal' ref={formRef}>
        <div className='modal-content' >
        <h1>Fill Details</h1>
        <form>
            <h3>Username:</h3>
            <input
            type="text"
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
            <h3>Email Address:</h3>
            <input
            type="email"
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <h3>Phone Number:</h3>
            <input
            type="text"
            id='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            minLength={10}
            maxLength={10}
            />
            <h3>Date of Birth:</h3>
            <input
            type="date"
            id='dob'
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
            />
        </form>
        <button type='submit' onClick={handleSubmit} className='submit-button'>Submit</button>
        </div>
    </div>
  );
};

export default function App() {
  const [disable, setDisable] = useState(true);

  const toggle = () => {
    setDisable((prevState) => !prevState);
  };

  const closeModal = () => {
    setDisable(true);
  };

  const toggleSubmit = (value) => {
    setDisable(value);
  };

  return (
    <div className='container'>
      <h1>User Details Modal</h1>
      <button type='button' onClick={toggle}>
        Open Form
      </button>
      {!disable && (
        <div className='modal-overlay'>
          <Userform toggleSubmit={toggleSubmit} closeModal={closeModal} />
        </div>
      )}
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import socket, { initSocket } from './socket';

export default function JoinOrCreateRoom() {
  const [newKey, setNewKey] = useState('');
  const [joinKey, setJoinKey] = useState('');

  useEffect(() => {
    initSocket(socket);
  }, []);

  const handleNewKeyChange = (evt) => {
    setNewKey(evt.target.value);
  };

  const handleJoinKeyChange = (evt) => {
    setJoinKey(evt.target.value);
  };

  const handleNewSubmit = (evt) => {
    evt.preventDefault();
    // socket stuff
  };

  const handleJoinSubmit = (evt) => {
    evt.preventDefault();
    // socket stuff
  };

  return (
    <div>
      <form onSubmit={handleNewSubmit}>
        <label htmlFor="new-room">Create a New Room</label>
        <input
          name="new-room"
          onChange={handleNewKeyChange}
          type="text"
          value={newKey}
        />
        <button type="submit">CREATE</button>
      </form>
      <form onSubmit={handleJoinSubmit}>
        <label htmlFor="join-room">Join a Room</label>
        <input
          name="join-room"
          onChange={handleJoinKeyChange}
          type="text"
          value={joinKey}
        />
        <button type="submit">JOIN</button>
      </form>
    </div>
  );
}

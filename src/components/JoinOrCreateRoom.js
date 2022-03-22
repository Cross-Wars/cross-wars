import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function JoinOrCreateRoom() {
  const history = useHistory();
  const [newRoomKey, setNewRoomKey] = useState('');
  const [joinRoomKey, setJoinRoomKey] = useState('');

  return (
    <div>
      <form>
        <label htmlFor="newRoomKey">Create A Room</label>
        <input type="text" value={newRoomKey} name="newRoomKey"></input>
      </form>
      <form>
        <label htmlFor="joinRoomKey">Join An Existing Room</label>
        <input type="text" value={joinRoomKey} name="joinRoomKey"></input>
      </form>
    </div>
  );
}

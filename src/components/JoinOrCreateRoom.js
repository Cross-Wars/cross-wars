import React, { useState, useEffect } from "react";
import socket, { initSocket } from "./socket";
import { uid } from "uid";

export default function JoinOrCreateRoom(props) {
  const [newKey, setNewKey] = useState("");
  const [joinKey, setJoinKey] = useState("");
  const [roomId, setRoomId] = useState("");
  const [host, setHost] = useState(false);
  const [username, setUsername] = useState("user-name");

  useEffect(() => {
    initSocket(socket);
    console.log(props);
    const room = props.location.search.substring(1);
    if (!room) {
      const newRoomId = uid();
      setRoomId(newRoomId);
      setHost(true);
    } else {
      setRoomId(room);
    }
    socket.on("room-full", () => {
      props.history.push("/error");
    });
  }, []);

  const handleNewKeyChange = (evt) => {
    setNewKey(evt.target.value);
  };

  // const handleJoinKeyChange = (evt) => {
  //   setJoinKey(evt.target.value);
  // };

  const handleNewSubmit = (evt) => {
    evt.preventDefault();
    socket.emit("set-info", {
      roomId,
      username,
      host,
    });
    socket.emit("join-room", roomId);
    window.localStorage.setItem("roomId", roomId);
    window.localStorage.setItem("host", host);
    // props.history.push(`/lobby/${roomId}`)
    props.history.push("/game");
    console.log(roomId);
    console.log(username);
  };

  // const handleJoinSubmit = (evt) => {
  //   evt.preventDefault();
  //   // socket stuff
  // };

  return (
    <div>
      <h1>🔪 CrossWars 🔪</h1>
      <form>
        <label htmlFor="username-input">Enter Your Username</label>
        <input
          name="username-input"
          onChange={handleNewKeyChange}
          type="text"
          value={newKey}
        />
      </form>
      {props.location.search.substring(1) ? (
        <form onSubmit={handleNewSubmit}>
          <button type="submit">JOIN ROOM</button>
        </form>
      ) : (
        <form onSubmit={handleNewSubmit}>
          <button type="submit">CREATE ROOM</button>
        </form>
      )}
    </div>
  );
}

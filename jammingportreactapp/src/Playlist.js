import React, { useState } from "react";
import logo from './logo.svg';
import './Playlist.css'

function PBF() {
  const [userInput, setUserInput] = useState('');
  function handleUserInput(e) {
    setUserInput(e.target.value);
  }
  return (
    <>
      <div id = "playlistbox">
        <h3>My Playlist</h3>
        <p>A song</p>
        <p>another song here</p>
        <p>and yet another</p>
      </div>
    </>
  );
}


export default PBF;

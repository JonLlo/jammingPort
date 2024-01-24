import React, { useState } from "react";
import logo from './logo.svg';
import './SearchResults.css'

function RBF() {
  const [userInput, setUserInput] = useState('');
  function handleUserInput(e) {
    setUserInput(e.target.value);
  }
  return (
    <>
      <div id = "resultsbox">
        <h3>results</h3>
        <p>A result</p>
        <p>another song here</p>
        <p>and yet another</p>
      </div>
    </>
  );
}


export default RBF;

import React, { useState } from "react";
import './SearchBar.css'


function SBF() {
  const [userInput, setUserInput] = useState('');
  function handleUserInput(e) {
    setUserInput(e.target.value);
  }
  return (
    <>
      <div id = "searchbarbit">
        <h2>JAMMING!</h2>
        <form>
          <label for="search"></label>
          <input id="search" type="text" onChange={handleUserInput} value={userInput} />
        </form>
        <button type="submit">Search</button>
        <h2>Current User Input: </h2>
        <h4>{userInput}</h4>
      </div>
    </>
  );
}


export default SBF;

import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName]=useState("");
  const handleName =(event)=>{
    setName(event.target.value);
  }
  return (
    <div>
      <p>Enter your name:</p>
      <input type="text" onChange={handleName} />
      { name && <p>Hello {name}!</p> }
    </div>
  )
}

export default App

import React from "react";
import "./App.css";
import { useState } from 'react';

function Hook_controlledbuttonstate () 
{
  
  const [count, setCount] = useState(0);
  return(
    <div className = "App-header">
      <form>
        <h1>Clcik Counts are {count}</h1>
        <button type="button" onClick={() =>setCount(count+1)}>Click me</button>
      </form>
    </div>
  );
}
export default Hook_controlledbuttonstate;

import React, { useState } from "react";
import "../App.css";
/*
Instructions:
  Can't remove the buttons when clicked , See if you can debug and fix 
*/

function Parent() {
  const [children, setChildren] = useState([3, 1, 2]);

  function removeChild(removedId: number) {
    setChildren(children.filter((id) => id !== removedId));
  }

  return (
    <div>
      <h2> Hi there.... </h2>
      {children.map((id) => (
        <div>
        <button onClick={() => removeChild(id)}>I'm the child {id}. Click to remove me!</button>
      </div>
      ))}
    </div>
  );
}

export default function RemoveButton() {
  return (
    <div>
      <Parent />
      
    </div>
  );
}

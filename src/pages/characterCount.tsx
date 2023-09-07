import { useState } from "react";
import "../App.css";

export default function CountInputChanges() {
  const [count, setCount] = useState(0);

  const onChange = (event: { key: string; target: { value: any } }) => {
    if (event.key == "Backspace") setCount(count - 1);
    else setCount(count + 1);
  };

  return (
    <div>
      <input type="text" onChange={() => onChange} />
      <div>Number of changes: {count}</div>
    </div>
  );
}

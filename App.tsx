import React, {useEffect, useRef, useState} from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevState(count);

  const incrementHandler = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Prev Count : {prevCount}</h1>
      <button onClick={incrementHandler}>Increment ++</button>
    </div>
  );
}


function usePrevState(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value])

console.log(ref.current);
  return ref.current;
}
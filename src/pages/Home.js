import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "store/counter";

function Home() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  function onIncrease() {
    dispatch(increment());
  }
  function onDecrease() {
    dispatch(decrement());
  }
  return (
    <div>
      <h1>{counter?.number}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Home;

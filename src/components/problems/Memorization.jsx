import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getRandomInt } from "utils/utils";

export default function Memorization({ setAnswer, setTitle }) {
  const [number, setNumber] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!setAnswer || !setTitle) return;
    setTitle("Remember the numbers on the screen.");
    const length = getRandomInt(4, 8);
    let temp = "";
    for (let i = 0; i < length; i++) {
      temp += getRandomInt(0, 9);
    }
    setNumber(temp);
    setAnswer(temp);
  }, [setAnswer, setTitle]);

  useEffect(() => {
    if (number) {
      setShow(true);
    }
  }, [number]);

  useEffect(() => {
    if (!show) return;
    const time = Math.floor(number.length / 2) - 1;
    function tick() {
      return setTimeout(() => setShow(false), time * 1000);
    }
    tick();
    return () => clearTimeout(tick);
  }, [show, number]);

  return <Container>{show && <Number>{number}</Number>}</Container>;
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.5);
  font-size: 40px;
  font-weight: 600;
  border-radius: 10px;
  margin-bottom: 40px;
`;
const Number = styled.div`
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;

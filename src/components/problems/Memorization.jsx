import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getRandomInt } from "utils/utils";

export default function Memorization({ setAnswer }) {
  const [number, setNumber] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!setAnswer) return;
    const length = getRandomInt(4, 8);
    let temp = "";
    for (let i = 0; i < length; i++) {
      temp += getRandomInt(0, 9);
    }
    setNumber(temp);
    setAnswer(temp);
  }, [setAnswer]);

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
  justify-content: space-between;
  align-items: center;
  width: 660px;
`;
const Number = styled.div`
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;

import React, { useEffect, useState } from "react";
import { Circle, Layer, Stage } from "react-konva";
import styled from "styled-components";
import { getRandomCoord, getRandomInt } from "utils/utils";

export default function AddDots({ setAnswer }) {
  const [dotList1, setDotList1] = useState({});
  const [dotList2, setDotList2] = useState({});

  useEffect(() => {
    if (!setAnswer) return;
    const number1 = getRandomInt(1, 9);
    const number2 = getRandomInt(1, 9);
    setAnswer(number1 + number2);

    for (let i = 0; i < number1; i++) {
      const coord = getRandomCoord(300, 300, 15);
      const key = "blue" + i;
      setDotList1((prev) => ({
        ...prev,
        [key]: (
          <Circle
            key={key}
            x={coord.x}
            y={coord.y}
            radius={15}
            fill="blue"
            stroke="black"
          />
        ),
      }));
    }
    for (let i = 0; i < number2; i++) {
      const coord = getRandomCoord(300, 300, 15);
      const key = "red" + i;
      setDotList2((prev) => ({
        ...prev,
        [key]: (
          <Circle
            key={key}
            x={coord.x}
            y={coord.y}
            radius={15}
            fill="red"
            stroke="black"
          />
        ),
      }));
    }
  }, [setAnswer]);

  return (
    <Container>
      <Wrapper>
        <Stage width={300} height={300}>
          <Layer>{Object.entries(dotList1).map(([, x]) => x)}</Layer>
        </Stage>
      </Wrapper>
      <Operator>+</Operator>
      <Wrapper>
        <Stage width={300} height={300}>
          <Layer>{Object.entries(dotList2).map(([, x]) => x)}</Layer>
        </Stage>
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 660px;
`;
const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
`;
const Operator = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;

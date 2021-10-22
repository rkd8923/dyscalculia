import React, { useEffect, useState } from "react";
import { Layer, Rect, Stage } from "react-konva";
import styled from "styled-components";
import { getRandomInt } from "utils/utils";

export default function MulDots({ setAnswer, setTitle }) {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  useEffect(() => {
    if (!setAnswer || !setTitle) return;
    const number1 = getRandomInt(1, 6);
    const number2 = getRandomInt(1, 6);
    setNumber1(number1);
    setNumber2(number2);
    setTitle("How many dots are there?");
    setAnswer(number1);
  }, [setAnswer, setTitle]);
  const redRect = [
    { x: 25, y: 25, v: 1 <= number1 * number2 },
    { x: 25, y: 70, v: 2 <= number1 * number2 },
    { x: 25, y: 115, v: 3 <= number1 * number2 },
    { x: 25, y: 160, v: 4 <= number1 * number2 },
    { x: 25, y: 205, v: 5 <= number1 * number2 },
    { x: 25, y: 250, v: 6 <= number1 * number2 },
    { x: 70, y: 25, v: 7 <= number1 * number2 },
    { x: 70, y: 70, v: 8 <= number1 * number2 },
    { x: 70, y: 115, v: 9 <= number1 * number2 },
    { x: 70, y: 160, v: 10 <= number1 * number2 },
    { x: 70, y: 205, v: 11 <= number1 * number2 },
    { x: 70, y: 250, v: 12 <= number1 * number2 },
    { x: 115, y: 25, v: 13 <= number1 * number2 },
    { x: 115, y: 70, v: 14 <= number1 * number2 },
    { x: 115, y: 115, v: 15 <= number1 * number2 },
    { x: 115, y: 160, v: 16 <= number1 * number2 },
    { x: 115, y: 205, v: 17 <= number1 * number2 },
    { x: 115, y: 250, v: 18 <= number1 * number2 },
    { x: 160, y: 25, v: 19 <= number1 * number2 },
    { x: 160, y: 70, v: 20 <= number1 * number2 },
    { x: 160, y: 115, v: 21 <= number1 * number2 },
    { x: 160, y: 160, v: 22 <= number1 * number2 },
    { x: 160, y: 205, v: 23 <= number1 * number2 },
    { x: 160, y: 250, v: 24 <= number1 * number2 },
    { x: 205, y: 25, v: 25 <= number1 * number2 },
    { x: 205, y: 70, v: 26 <= number1 * number2 },
    { x: 205, y: 115, v: 27 <= number1 * number2 },
    { x: 205, y: 160, v: 28 <= number1 * number2 },
    { x: 205, y: 205, v: 29 <= number1 * number2 },
    { x: 205, y: 250, v: 30 <= number1 * number2 },
    { x: 250, y: 25, v: 31 <= number1 * number2 },
    { x: 250, y: 70, v: 32 <= number1 * number2 },
    { x: 250, y: 115, v: 33 <= number1 * number2 },
    { x: 250, y: 160, v: 34 <= number1 * number2 },
    { x: 250, y: 205, v: 35 <= number1 * number2 },
    { x: 250, y: 250, v: 36 <= number1 * number2 },
  ];
  const blueRect = [
    { x: 25, y: 135, v: 1 <= number2 },
    { x: 70, y: 135, v: 2 <= number2 },
    { x: 115, y: 135, v: 3 <= number2 },
    { x: 160, y: 135, v: 4 <= number2 },
    { x: 205, y: 135, v: 5 <= number2 },
    { x: 250, y: 135, v: 6 <= number2 },
  ];
  return (
    <Container>
      <Wrapper>
        <Stage width={300} height={300}>
          <Layer>
            {redRect.map(({ x, y, v }) => (
              <Rect
                width={30}
                height={30}
                fill={"red"}
                x={x}
                y={y}
                visible={v}
                key={"red" + x + y}
              />
            ))}
          </Layer>
        </Stage>
      </Wrapper>
      <Operator>÷</Operator>
      <Wrapper>
        <Stage width={300} height={300}>
          <Layer>
            {blueRect.map(({ x, y, v }) => (
              <Rect
                width={30}
                height={30}
                fill={"blue"}
                x={x}
                y={y}
                visible={v}
                key={"blue" + x + y}
              />
            ))}
          </Layer>
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
  border: 1px solid grey;
`;
const Operator = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;

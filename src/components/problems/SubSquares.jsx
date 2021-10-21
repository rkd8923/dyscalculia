import React, { useEffect, useState } from "react";
import { Layer, Line, Rect, Stage, Text } from "react-konva";
import styled from "styled-components";
import { getRandomInt } from "utils/utils";

export default function SubSquares({ setAnswer, setTitle }) {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  useEffect(() => {
    if (!setAnswer || !setTitle) return;
    const n1 = getRandomInt(2, 9);
    const n2 = getRandomInt(1, n1);
    setTitle("How many Dots?");

    setNumber1(n1);
    setNumber2(n2);
    setAnswer(n1 - n2);
  }, [setAnswer, setTitle]);

  const redRect = [
    { x: 330, y: 44, v: 1 <= number1 },
    { x: 330, y: 64, v: 2 <= number1 },
    { x: 330, y: 84, v: 3 <= number1 },
    { x: 330, y: 104, v: 4 <= number1 },
    { x: 330, y: 124, v: 5 <= number1 },
    { x: 350, y: 124, v: 6 <= number1 },
    { x: 350, y: 104, v: 7 <= number1 },
    { x: 350, y: 84, v: 8 <= number1 },
    { x: 350, y: 64, v: 9 <= number1 },
  ];
  const blueRect = [
    { x: 330, y: 170, v: 1 <= number2 },
    { x: 330, y: 190, v: 2 <= number2 },
    { x: 330, y: 210, v: 3 <= number2 },
    { x: 330, y: 230, v: 4 <= number2 },
    { x: 330, y: 250, v: 5 <= number2 },
    { x: 350, y: 250, v: 6 <= number2 },
    { x: 350, y: 230, v: 7 <= number2 },
    { x: 350, y: 210, v: 8 <= number2 },
    { x: 350, y: 190, v: 9 <= number2 },
  ];
  const resultRect = [
    {
      x: 330,
      y: 350,
      v: 1 <= number1 - number2,
    },
    {
      x: 330,
      y: 370,
      v: 2 <= number1 - number2,
    },
    {
      x: 330,
      y: 390,
      v: 3 <= number1 - number2,
    },
    {
      x: 330,
      y: 410,
      v: 4 <= number1 - number2,
    },
    {
      x: 330,
      y: 430,
      v: 5 <= number1 - number2,
    },
    {
      x: 350,
      y: 430,
      v: 6 <= number1 - number2,
    },
    {
      x: 350,
      y: 410,
      v: 7 <= number1 - number2,
    },
    {
      x: 350,
      y: 390,
      v: 8 <= number1 - number2,
    },
    {
      x: 350,
      y: 370,
      v: 9 <= number1 - number2,
    },
  ];

  return (
    <Wrapper>
      <Stage width={500} height={500}>
        <Layer>
          <Text text={number1} fontSize={130} x={200} y={40} />
          <Text text={number2} fontSize={130} x={200} y={170} />
          <Text text={"-"} fontSize={130} x={90} y={170} />
          <Line
            stroke="black"
            tension={0.5}
            x={30}
            y={320}
            points={[0, 0, 440, 0]}
          />
          <Text text={"?"} fontSize={130} x={200} y={350} />
          {redRect.map(({ x, y, v }) => (
            <Rect
              width={16}
              height={16}
              fill={"red"}
              x={x}
              y={y}
              visible={v}
              key={"red" + x + y}
            />
          ))}
          {blueRect.map(({ x, y, v }) => (
            <Rect
              width={16}
              height={16}
              fill={"blue"}
              x={x}
              y={y}
              visible={v}
              key={"blue" + x + y}
            />
          ))}
          {resultRect.map(({ x, y, v }) => (
            <Rect
              width={16}
              height={16}
              fill={"red"}
              x={x}
              y={y}
              visible={v}
              key={"result" + x + y}
            />
          ))}
        </Layer>
      </Stage>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: white;
  border: 1px solid grey;
`;

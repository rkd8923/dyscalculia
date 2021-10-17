import React, { useEffect, useState } from "react";
import { Layer, Stage, Text } from "react-konva";
import styled from "styled-components";
import { getRandomInt } from "utils/utils";

export default function ComparisonNumbers({ setAnswer, setTitle }) {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  useEffect(() => {
    if (!setAnswer || !setTitle) return;
    setTitle("Which number is larger?");
    const n1 = getRandomInt(1, 10);
    let n2 = getRandomInt(0, 10);
    n2 = n1 === n2 ? n1 - 1 : n2;
    setNumber1(n1);
    setNumber2(n2);
    setAnswer(n1 > n2 ? n1 : n2);
  }, [setAnswer, setTitle]);

  return (
    <Wrapper>
      <Stage width={500} height={500}>
        <Layer>
          <Text
            text={number1}
            fontSize={getRandomInt(100, 250)}
            x={getRandomInt(10, 150)}
            y={getRandomInt(10, 220)}
          />
        </Layer>
        <Layer>
          <Text
            text={number2}
            fontSize={getRandomInt(100, 250)}
            x={getRandomInt(260, 380)}
            y={getRandomInt(10, 330)}
          />
        </Layer>
      </Stage>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: white;
`;

import React, { useEffect, useState } from "react";
import { Circle, Layer, Stage } from "react-konva";
import styled from "styled-components";
import { getRandomCoord, getRandomInt } from "utils/utils";

function CountingDots({ colorCount, setAnswer }) {
  const [dotList, setDotList] = useState({});

  useEffect(() => {
    if (!colorCount || colorCount < 1 || !setAnswer) return;
    const colorList = ["blue", "red", "green"];
    for (let i = 0; i < colorCount; i++) {
      const color = colorList[i];
      const answer = getRandomInt(1, 15);
      i === 0 && setAnswer(answer);
      for (let j = 0; j < answer; j++) {
        const coord = getRandomCoord(500, 500, 20);
        const key = color + j;
        setDotList((prev) => ({
          ...prev,
          [key]: (
            <Circle
              key={key}
              x={coord.x}
              y={coord.y}
              radius={20}
              fill={color}
              stroke="black"
            />
          ),
        }));
      }
    }
  }, [colorCount, setAnswer]);

  return (
    <Wrapper>
      <Stage width={500} height={500}>
        <Layer>{Object.entries(dotList).map(([, x]) => x)}</Layer>
      </Stage>
    </Wrapper>
  );
}

export default React.memo(CountingDots);

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: white;
`;

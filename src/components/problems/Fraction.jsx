import React, { useState } from "react";
import { Layer, Stage } from "react-konva";
import styled from "styled-components";

function Fraction({ setAnswer, setTitle }) {
  const [dotList, setDotList] = useState({});

  return (
    <Wrapper>
      <Stage width={500} height={500}>
        <Layer>{Object.entries(dotList).map(([, x]) => x)}</Layer>
      </Stage>
    </Wrapper>
  );
}

export default React.memo(Fraction);

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: white;
  border: 1px solid grey;
`;

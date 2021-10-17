import { Button } from "@material-ui/core";
import bg from "assets/images/background/exam.jpg";
import React from "react";
import styled from "styled-components";

export default function TypeDescription({ type, next }) {
  return (
    <ProblemWrapper>
      <div>{type} 설명 화면</div>
      <Button onClick={next}>버튼</Button>
    </ProblemWrapper>
  );
}
const ProblemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-size: contain;
`;

import { Button } from "@material-ui/core";
import bg from "assets/images/background/type-description.jpg";
import React from "react";
import styled from "styled-components";
import { typeText1, typeText2, typeText3, typeText4 } from "utils/text";

export default function TypeDescription({ type, next }) {
  const title = {
    type1: "Counting",
    type2: "Comparison",
    type3: "Arithmetic",
    type4: "Memorization",
  };
  const text = {
    type1: typeText1,
    type2: typeText2,
    type3: typeText3,
    type4: typeText4,
  };
  return (
    <ProblemWrapper>
      <Title>{title[type]}</Title>
      <Text>{text[type]}</Text>
      <Button variant="contained" color="primary" onClick={next}>
        start
      </Button>
    </ProblemWrapper>
  );
}
const ProblemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
`;

const Title = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.5);
  font-size: 40px;
  font-weight: 600;
  border-radius: 10px;
  margin-bottom: 40px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.5);
  font-size: 25px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 40px;
`;

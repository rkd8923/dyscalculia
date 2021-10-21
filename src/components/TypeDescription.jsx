import { Button } from "@material-ui/core";
import Paper from "@mui/material/Paper";
import arithmetic from "assets/images/background/arithmetic.png";
import comparison from "assets/images/background/comparison.png";
import counting from "assets/images/background/counting.jpg";
import memorization from "assets/images/background/memorization.jpg";
import React from "react";
import styled from "styled-components";
import { typeText1, typeText2, typeText3, typeText4 } from "utils/text";

export default function TypeDescription({ type, next }) {
  const image = {
    type1: counting,
    type2: comparison,
    type3: arithmetic,
    type4: memorization,
  };
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
      <StyledPaper elevation={3}>
        <Image src={image[type]} alt="img" />
        <Title>{title[type]}</Title>
        <Text>{text[type]}</Text>
        <StyledButton
          variant="outlined"
          size="large"
          color="primary"
          onClick={next}
        >
          start
        </StyledButton>
      </StyledPaper>
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
`;
const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`;
const Image = styled.img`
  width: 12rem;
  padding: 0.5rem;
  /* border: 1px solid grey; */
`;
const Title = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 600;
  border-radius: 10px;
  margin: 2rem 0;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 40rem;
  min-width: 20rem;

  height: 6rem;
  font-size: 1.4rem;
  padding: 10px;
  margin-bottom: 2rem;
`;
const StyledButton = styled(Button)``;

import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import styled from "styled-components";
import { getProblemImage2, getProblemTitle } from "utils/problem";

function Type3({ problem, handlerSubmit }) {
  const problemImage1 = getProblemImage2(3, problem?.id, 1);
  const problemImage2 = getProblemImage2(3, problem?.id, 2);
  const [value, setValue] = useState(0);

  const getColor = () => {
    if (value === 1) return "RED";
    if (value === 2) return "BLUE";
    return "?";
  };
  const ImageSection = () => {
    return (
      <ImageSectionWrapper>
        <img src={problemImage1} alt="type3-1" onClick={() => setValue(1)} />
        <img src={problemImage2} alt="type3-2" onClick={() => setValue(2)} />
      </ImageSectionWrapper>
    );
  };
  const AnswerSection = () => {
    return (
      <AnswerWrapper>
        <div className="answer">Answer is {getColor()}</div>
        {!!value && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => handlerSubmit(value)}
          >
            Submit
          </Button>
        )}
      </AnswerWrapper>
    );
  };
  return (
    <TypeContainer>
      <div className="title">{getProblemTitle(3)}</div>
      <ImageSection />
      <AnswerSection />
    </TypeContainer>
  );
}

const TypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  > .title {
    font-size: 2.5rem;
    font-weight: 600;
  }
`;

const ImageSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40rem;
  > img {
    width: 48%;
    cursor: pointer;
  }
`;

const AnswerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6rem;
  max-width: 30rem;
  background-color: white;
  border: 1px solid gray;
  border-radius: 1rem;
  > .answer {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 1rem;
  }
`;

export default Type3;

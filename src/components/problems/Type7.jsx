import React from "react";
import styled from "styled-components";
import { getProblemImage, getProblemTitle } from "utils/problem";
import AnswerInput from "./AnswerInput";

function Type1({ problem, handlerSubmit }) {
  const problemImage = getProblemImage(7, problem?.id);

  const ImageSection = () => {
    return (
      <ImageSectionWrapper>
        <img src={problemImage} alt="type1" />
      </ImageSectionWrapper>
    );
  };
  const AnswerSection = () => {
    return <AnswerInput handlerSubmit={handlerSubmit} />;
  };
  return (
    <TypeContainer>
      <div className="title">{getProblemTitle(1)}</div>
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
  width: 30rem;
  > img {
    width: 100%;
    background-color: white;
  }
`;

export default Type1;

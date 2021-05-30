import React from "react";
import styled from "styled-components";
import { getProblemImage, getProblemTitle } from "utils/problem";
import AnswerInput from "./AnswerInput";

function Type2({ problem, handlerSubmit }) {
  const problemImage = getProblemImage(2, problem?.id);

  const ImageSection = () => {
    return (
      <ImageSectionWrapper>
        <img src={problemImage} alt="type2" />
      </ImageSectionWrapper>
    );
  };
  const AnswerSection = () => {
    return <AnswerInput handlerSubmit={handlerSubmit} />;
  };
  return (
    <TypeContainer>
      <div className="title">{getProblemTitle(2)}</div>
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

export default Type2;
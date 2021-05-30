import React from "react";
import styled from "styled-components";
import { getProblemImage2, getProblemTitle } from "utils/problem";
import AnswerInput from "./AnswerInput";

function Type5({ problem, handlerSubmit }) {
  const problemImage1 = getProblemImage2(5, problem?.id, 1);
  const problemImage2 = getProblemImage2(5, problem?.id, 2);

  const ImageSection = () => {
    return (
      <ImageSectionWrapper>
        <img src={problemImage1} alt="type5" />
        <span>+</span>
        <img src={problemImage2} alt="type5" />
      </ImageSectionWrapper>
    );
  };
  const AnswerSection = () => {
    return <AnswerInput handlerSubmit={handlerSubmit} />;
  };
  return (
    <TypeContainer>
      <div className="title">{getProblemTitle(5)}</div>
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
    width: 45%;
  }
  > span {
    font-size: 4rem;
    font-weight: 600;
  }
`;
export default Type5;

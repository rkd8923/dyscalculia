import Paper from "@mui/material/Paper";
import bg from "assets/images/background/test.jpg";
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { getRandomInt } from "utils/utils";
import AddDots from "./problems/AddDots";
import AddSquares from "./problems/AddSquares";
import AnswerInput from "./problems/AnswerInput";
import ComparisonDots from "./problems/ComparisonDots";
import CountingDots from "./problems/CountingDots";
import DivSquares from "./problems/DivSquares";
import Memorization from "./problems/Memorization";
import MulDots from "./problems/MulDots";
import SubSquares from "./problems/SubSquares";

function ProblemLayoutV2({ type, count, next, allCount, submit, time }) {
  const [answer, setAnswer] = useState("");
  const [inputAnswer, setInputAnswer] = useState("");
  const [title, setTitle] = useState("");
  const typeName = {
    type1: "Counting",
    type2: "Comparison",
    type3: "Arithmetic",
    type4: "Memorization",
  };
  const ProblemComponent = useMemo(() => {
    if (count < 0) return null;
    const problemComponents = {
      type1: [
        <CountingDots
          colorCount={1}
          setAnswer={setAnswer}
          setTitle={setTitle}
        />,
        <CountingDots
          colorCount={2}
          setAnswer={setAnswer}
          setTitle={setTitle}
        />,
      ],
      type2: [<ComparisonDots setAnswer={setAnswer} setTitle={setTitle} />],
      type3: [
        <AddDots setAnswer={setAnswer} setTitle={setTitle} />,
        <AddSquares setAnswer={setAnswer} setTitle={setTitle} />,
        <SubSquares setAnswer={setAnswer} setTitle={setTitle} />,
        <MulDots setAnswer={setAnswer} setTitle={setTitle} />,
        <DivSquares setAnswer={setAnswer} setTitle={setTitle} />,
      ],
      type4: [<Memorization setAnswer={setAnswer} setTitle={setTitle} />],
    };
    const componentNumber = getRandomInt(0, problemComponents[type].length);

    return () => problemComponents[type][componentNumber];
  }, [type, count]);

  function handleSubmit() {
    submit(answer, inputAnswer);
    setInputAnswer("");
    next();
  }

  return (
    <ProblemWrapper>
      <StyledPaper>
        <Header>
          <TypeName>{typeName[type]}</TypeName>
          <No>{allCount}</No>
          <SecondWrapper>
            <Second>{Math.floor(time / 10)}</Second>
            <Second>{time % 10}</Second>
          </SecondWrapper>
        </Header>
        <Title>{title}</Title>
        <ProblemComponentWrapper>
          <ProblemComponent />
        </ProblemComponentWrapper>
        <AnswerInput
          inputAnswer={inputAnswer}
          setInputAnswer={setInputAnswer}
          handleSubmit={handleSubmit}
        />
      </StyledPaper>
    </ProblemWrapper>
  );
}

export default React.memo(ProblemLayoutV2);

const ProblemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
`;

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  width: 100%;
  max-width: 42rem;
  min-width: 20rem;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  margin-bottom: 2rem;
`;
const No = styled.span`
  font-size: 3rem;
  font-weight: 600;
`;
const TypeName = styled.span`
  font-size: 1.3rem;
`;
const Title = styled.span`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 3rem;
`;
const SecondWrapper = styled.div`
  display: flex;
`;
const Second = styled.span`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  /* -webkit-flex: 0 1 25%; */
  /* -ms-flex: 0 1 25%; */
  /* flex: 0 1 25%; */
  font-size: 1.5rem;
  background-color: #404549;
  border-radius: 5px;
  padding: 0.4rem 0.75rem;
  color: white;
  margin-left: 0.125rem;
  ::after {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 50%;
    bottom: 50%;
    content: "";
    width: "100%";
    height: 2px;
    background-color: #232323;
    opacity: 0.4;
  }
`;
const ProblemComponentWrapper = styled.div`
  margin: 6rem 0;
`;

import bg from "assets/images/background/exam.jpg";
import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { setResult } from "store/test";
import styled from "styled-components";
import { getRandomInt } from "utils/utils";
import AddDots from "./problems/AddDots";
import AddSquares from "./problems/AddSquares";
import AnswerInput from "./problems/AnswerInput";
import ComparisonDots from "./problems/ComparisonDots";
import ComparisonNumbers from "./problems/ComparisonNumbers";
import CountingDots from "./problems/CountingDots";
import Memorization from "./problems/Memorization";
import SubSquares from "./problems/SubSquares";

function ProblemLayoutV2({ type, count, next, allCount }) {
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState("");
  const [inputAnswer, setInputAnswer] = useState("");
  const [title, setTitle] = useState("");

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
      type2: [
        <ComparisonDots setAnswer={setAnswer} setTitle={setTitle} />,
        <ComparisonNumbers setAnswer={setAnswer} setTitle={setTitle} />,
      ],
      type3: [
        <AddDots setAnswer={setAnswer} setTitle={setTitle} />,
        <AddSquares setAnswer={setAnswer} setTitle={setTitle} />,
        <SubSquares setAnswer={setAnswer} setTitle={setTitle} />,
      ],
      type4: [<Memorization setAnswer={setAnswer} setTitle={setTitle} />],
    };
    const componentNumber = getRandomInt(0, problemComponents[type].length);

    return () => problemComponents[type][componentNumber];
  }, [type, count]);

  function handleSubmit() {
    const result = +answer === +inputAnswer;
    dispatch(setResult(type, count, result));
    setInputAnswer("");
    next();
  }

  return (
    <ProblemWrapper>
      <Title>{allCount + ". " + title}</Title>
      <ProblemComponent />
      <AnswerInput
        inputAnswer={inputAnswer}
        setInputAnswer={setInputAnswer}
        handleSubmit={handleSubmit}
      />
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

const Title = styled.span`
  font-size: 40px;
  font-weight: 600;
`;

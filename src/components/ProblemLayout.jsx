import bg from "assets/images/background/exam.jpg";
import Type1 from "components/problems/Type1";
import Type10 from "components/problems/Type10";
import Type2 from "components/problems/Type2";
import Type3 from "components/problems/Type3";
import Type4 from "components/problems/Type4";
import Type5 from "components/problems/Type5";
import Type6 from "components/problems/Type6";
import Type7 from "components/problems/Type7";
import Type8 from "components/problems/Type8";
import Type9 from "components/problems/Type9";
import React from "react";
import { useDispatch } from "react-redux";
import { setResult } from "store/test";
import styled from "styled-components";

function ProblemLayout({ problem, next }) {
  const dispatch = useDispatch();
  const types = {
    1: Type1,
    2: Type2,
    3: Type3,
    4: Type4,
    5: Type5,
    6: Type6,
    7: Type7,
    8: Type8,
    9: Type9,
    10: Type10,
  };

  function checkAnswer(input) {
    return +problem?.answer === +input;
  }

  function handlerSubmit(input) {
    dispatch(setResult(problem?.type, checkAnswer(input)));
    next();
  }

  const TypeComponent = types[problem?.type];
  return (
    <ProblemWrapper>
      <TypeComponent problem={problem} handlerSubmit={handlerSubmit} />
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
export default ProblemLayout;

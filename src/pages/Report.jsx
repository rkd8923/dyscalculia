import { Button } from "@material-ui/core";
import bg from "assets/images/background/report.jpg";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { reportDescriptionType1 } from "utils/text";

function Report({ history }) {
  const test = useSelector((state) => state.test);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   return () => {
  //     dispatch(setInit());
  //   };
  // });
  function getResult(type) {
    const result = test.result[type];
    return [...result].reduce((a, b) => a + b, 0);
  }

  if (!test) {
    return <div>There are no results</div>;
  }

  return (
    <ReportWrapper>
      <ReportPaper>
        <Title>Counting Test Result</Title>
        <MainText>{reportDescriptionType1}</MainText>
        <ResultText>{`· You scored ${getResult(
          "type1"
        )} out of 10 questions and took 7.1 seconds per question on average.`}</ResultText>
        <Title>Comparison Test Result</Title>
        <MainText>{reportDescriptionType1}</MainText>
        <ResultText>{`· You scored ${getResult(
          "type2"
        )} out of 10 questions and took 7.1 seconds per question on average.`}</ResultText>
        <Title>Arithmetic Test Result</Title>
        <MainText>{reportDescriptionType1}</MainText>
        <ResultText>{`· You scored ${getResult(
          "type3"
        )} out of 10 questions and took 7.1 seconds per question on average.`}</ResultText>
        <Title>Memorization Test Result</Title>
        <MainText>{reportDescriptionType1}</MainText>
        <ResultText>{`· You scored ${getResult(
          "type4"
        )} out of 10 questions and took 7.1 seconds per question on average.`}</ResultText>
        <ButtonArea>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/")}
          >
            home
          </Button>
        </ButtonArea>
      </ReportPaper>
    </ReportWrapper>
  );
}

const ReportWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
`;
const ReportPaper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 72rem;
  height: 90%;
  max-height: 90%;
  overflow-y: scroll;
  background-color: white;
  padding: 40px;
`;
const Title = styled.span`
  font-size: 36px;
  font-weight: 600;
`;
const MainText = styled.p`
  width: 100%;
  margin: 20px 0 20px 0;
  font-size: 20px;
`;
const ResultText = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 20px 0 20px 0;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 100px;
`;
const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default Report;

import { Button } from "@material-ui/core";
import { Paper } from "@mui/material";
import bg from "assets/images/background/report.jpg";
import Chart from "components/Chart";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  reportDescriptionType1,
  reportDescriptionType2,
  reportDescriptionType3,
  reportDescriptionType4,
} from "utils/text";

function PracticeReport({ history, location }) {
  const type = location?.state?.type;
  const test = useSelector((state) => state.practice);

  const title = {
    type1: "Counting",
    type2: "Comparison",
    type3: "Arithmetic",
    type4: "Memorization",
  };
  const description = {
    type1: reportDescriptionType1,
    type2: reportDescriptionType2,
    type3: reportDescriptionType3,
    type4: reportDescriptionType4,
  };

  function getResult() {
    const result = test.result;
    return [...result].reduce((a, b) => a + b, 0);
  }
  function getTime() {
    return test.time;
  }
  function getScore() {
    const result = getResult();
    const time = getTime();
    let score = 9 * result + (10 - time);
    return score > 0 ? score : 0;
  }
  function getGrade(score) {
    let grade;
    if (score > 85) {
      grade = "very low";
    } else if (score > 70) {
      grade = "low";
    } else if (score > 30) {
      grade = "moderate";
    } else if (score > 15) {
      grade = "good";
    } else {
      grade = "very good";
    }
    return grade;
  }
  if (!test) {
    return <div>There are no results</div>;
  }

  return (
    <ReportWrapper>
      <ReportPaper>
        <Group>
          <Title>{`${title[type]} Test Result`}</Title>
          <MainText>{description[type]}</MainText>
          <ResultText>{`· You scored ${getResult()} out of 10 questions and took ${getTime()} seconds per question on average.`}</ResultText>
          <TotalResultText>
            {`Your score is in the top ${100 - getScore()}%.`}
          </TotalResultText>
          <Chart score={getScore()} />
          <MainText>
            {`You are in the top ${
              100 - getScore()
            }% among all the people who did this test.
            Overall, you seem to have a ${getGrade(
              100 - getScore()
            )} at this category.`}
          </MainText>
        </Group>

        <ButtonArea>
          <StyledButton
            variant="outlined"
            color="primary"
            onClick={() => history.push("/")}
          >
            home
          </StyledButton>
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
const ReportPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 55rem;
  /* height: 90%; */
  max-height: 90%;
  overflow-y: auto;
  background-color: white;
  padding: 40px;
`;
const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.span`
  font-size: 2rem;
  font-weight: 600;
  margin-top: 2rem;
`;
const MainText = styled.p`
  width: 100%;
  margin: 1rem 0;
  font-size: 1.25rem;
`;
const ResultText = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 0.75rem 0;
  font-size: 20px;
  font-weight: 600;
  /* margin-bottom: 100px; */
`;
const TotalResultText = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 20px 0 20px 0;
  font-size: 1.5rem;
  font-weight: 600;
  /* margin-bottom: 100px; */
`;
const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
const StyledButton = styled(Button)``;

export default PracticeReport;

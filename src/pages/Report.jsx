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

function Report({ history }) {
  const test = useSelector((state) => state.test);

  function getResult(type) {
    const result = test.result[type];
    return [...result].reduce((a, b) => a + b, 0);
  }
  function getTime(type) {
    return test.time[type];
  }
  function getTypeScore(type) {
    const result = getResult(type);
    const time = getTime(type);
    let score = 9 * result + (10 - time);
    return score > 0 ? score : 0;
  }
  function getScore() {
    const result =
      (getResult("type1") +
        getResult("type2") +
        getResult("type3") +
        getResult("type4")) /
      4;
    const time =
      getTime("type1") + getTime("type2") + getTime("type3") + getTime("type4");
    let score = 9 * result + (10 - time / 4);
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
      <ReportPaper elevation={3}>
        <Group>
          <Title>Counting Test Result</Title>
          <MainText>{reportDescriptionType1}</MainText>
          <ResultText>{`· You scored ${getResult(
            "type1"
          )} out of 10 questions and took ${getTime(
            "type1"
          )} seconds per question on average.`}</ResultText>
          <TotalResultText>
            {`Your score is in the top ${100 - getTypeScore("type1")}%.`}
          </TotalResultText>
          <Chart score={getTypeScore("type1")} />
          <MainText>
            {`You are in the top ${
              100 - getTypeScore("type1")
            }% among all the people who did this test.
            Overall, you seem to have a ${getGrade(
              100 - getTypeScore("type1")
            )} at this category.`}
          </MainText>
        </Group>
        <Divider />
        <Group>
          <Title>Comparison Test Result</Title>
          <MainText>{reportDescriptionType2}</MainText>
          <ResultText>{`· You scored ${getResult(
            "type2"
          )} out of 10 questions and took ${getTime(
            "type2"
          )} seconds per question on average.`}</ResultText>
          <TotalResultText>
            {`Your score is in the top ${100 - getTypeScore("type2")}%.`}
          </TotalResultText>
          <Chart score={getTypeScore("type2")} />
          <MainText>
            {`You are in the top ${
              100 - getTypeScore("type2")
            }% among all the people who did this test.
            Overall, you seem to have a ${getGrade(
              100 - getTypeScore("type2")
            )} at this category.`}
          </MainText>
        </Group>
        <Divider />
        <Group>
          <Title>Arithmetic Test Result</Title>
          <MainText>{reportDescriptionType3}</MainText>
          <ResultText>{`· You scored ${getResult(
            "type3"
          )} out of 10 questions and took ${getTime(
            "type3"
          )} seconds per question on average.`}</ResultText>
          <TotalResultText>
            {`Your score is in the top ${100 - getTypeScore("type3")}%.`}
          </TotalResultText>
          <Chart score={getTypeScore("type3")} />
          <MainText>
            {`You are in the top ${
              100 - getTypeScore("type3")
            }% among all the people who did this test.
            Overall, you seem to have a ${getGrade(
              100 - getTypeScore("type3")
            )} at this category.`}
          </MainText>
        </Group>
        <Divider />
        <Group>
          <Title>Memorization Test Result</Title>
          <MainText>{reportDescriptionType4}</MainText>
          <ResultText>{`· You scored ${getResult(
            "type4"
          )} out of 10 questions and took ${getTime(
            "type4"
          )} seconds per question on average.`}</ResultText>
          <TotalResultText>
            {`Your score is in the top ${100 - getTypeScore("type4")}%.`}
          </TotalResultText>
          <Chart score={getTypeScore("type4")} />
          <MainText>
            {`You are in the top ${
              100 - getTypeScore("type4")
            }% among all the people who did this test.
            Overall, you seem to have a ${getGrade(
              100 - getTypeScore("type4")
            )} at this category.`}
          </MainText>
        </Group>
        <Divider />
        <Group>
          <Title>Total Test Result</Title>
          <TotalResultText>
            {`Your total score is in the top ${100 - getScore()}%.`}
          </TotalResultText>
          <Chart score={getScore()} />
        </Group>

        <ButtonArea>
          <StyledButton
            variant="outlined"
            size="large"
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
  height: 90%;
  max-height: 90%;
  overflow-y: scroll;
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

const Divider = styled.div`
  width: 100%;
  height: 0;
  border-bottom: 1px solid lightGrey;
  margin: 1rem 0;
`;
export default Report;

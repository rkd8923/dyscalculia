import { Button } from "@material-ui/core";
import bg from "assets/images/background/report.jpg";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInit } from "store/exam";
import styled from "styled-components";

function Report({ history }) {
  const exam = useSelector((state) => state.exam);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setInit());
    };
  });

  if (!exam) {
    return <div>There are no results</div>;
  }
  return (
    <ReportWrapper>
      <ReportPaper>
        <div>Count {exam.count}</div>
        <div>type1 {exam.result[0]}</div>
        <div>type2 {exam.result[1]}</div>
        <div>type3 {exam.result[2]}</div>
        <div>type4 {exam.result[3]}</div>
        <div>type5 {exam.result[4]}</div>
        <div>type6 {exam.result[5]}</div>
        <div>type7 {exam.result[6]}</div>
        <div>type8 {exam.result[7]}</div>
        <div>type9 {exam.result[8]}</div>
        <div>type10 {exam.result[9]}</div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/")}
        >
          home
        </Button>
      </ReportPaper>
    </ReportWrapper>
  );
}

const ReportWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
`;
const ReportPaper = styled.div`
  width: 75rem;
  height: 90%;
  background-color: white;
`;

export default Report;

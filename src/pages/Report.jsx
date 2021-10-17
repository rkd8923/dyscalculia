import { Button } from "@material-ui/core";
import bg from "assets/images/background/report.jpg";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInit } from "store/test";
import styled from "styled-components";

function Report({ history }) {
  const test = useSelector((state) => state.test);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setInit());
    };
  });

  if (!test) {
    return <div>There are no results</div>;
  }
  return (
    <ReportWrapper>
      <ReportPaper>
        <div>Count {test.count}</div>
        <div>type1 {test.result[0]}</div>
        <div>type2 {test.result[1]}</div>
        <div>type3 {test.result[2]}</div>
        <div>type4 {test.result[3]}</div>
        <div>type5 {test.result[4]}</div>
        <div>type6 {test.result[5]}</div>
        <div>type7 {test.result[6]}</div>
        <div>type8 {test.result[7]}</div>
        <div>type9 {test.result[8]}</div>
        <div>type10 {test.result[9]}</div>
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

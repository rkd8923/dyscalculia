import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React from "react";
import styled from "styled-components";

function AnswerInput({ inputAnswer, setInputAnswer, handleSubmit }) {
  function handleValue(event) {
    const v = event.target.value;
    setInputAnswer(v);
  }
  function onKeyPress(event) {
    if (event.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <AnswerWrapper>
      <div className="answer">Answer:</div>
      <TextField
        id="answer"
        value={inputAnswer}
        variant="outlined"
        onChange={handleValue}
        type="number"
        onKeyPress={onKeyPress}
      />
      <Button variant="outlined" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </AnswerWrapper>
  );
}
const AnswerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 6rem;
  max-width: 30rem;
  background-color: white;
  border: 1px solid gray;
  border-radius: 0.2rem;
  > .answer {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export default AnswerInput;

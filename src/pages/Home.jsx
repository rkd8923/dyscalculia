import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import bg from "assets/images/background/home-bg.jpg";
import React from "react";
import { useDispatch } from "react-redux";
import { setInit } from "store/test";
import styled from "styled-components";

function Home({ history }) {
  const dispatch = useDispatch();

  function goToTest() {
    dispatch(setInit());
    history.push("/test");
  }
  function goToDescription() {
    history.push("/description");
  }
  function goToPractice() {
    history.push("/practice");
  }
  return (
    <HomeWrapper>
      <StyledPaper elevation={3}>
        <Title>DYSCALCULIA</Title>
        <ButtonGroup></ButtonGroup>
        <StyledButton
          variant="outlined"
          size="large"
          color="secondary"
          style={{ textTransform: "none" }}
          onClick={goToDescription}
        >
          What is Dyscalculia?
        </StyledButton>
        <StyledButton
          variant="outlined"
          size="large"
          color="secondary"
          style={{ textTransform: "none" }}
          onClick={goToTest}
        >
          Test
        </StyledButton>
        <StyledButton
          variant="outlined"
          size="large"
          color="secondary"
          style={{ textTransform: "none" }}
          onClick={goToPractice}
        >
          Practice
        </StyledButton>
      </StyledPaper>
    </HomeWrapper>
  );
}
const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${bg});
  background-size: cover;
  width: 100%;
  height: 100vh;
`;
const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 40rem;
  min-width: 25rem;
  padding: 6rem 2rem;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 800;
  height: 6rem;
  opacity: 0.8;
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 100px;
`;

const StyledButton = styled(Button)`
  width: 90%;
  height: 4rem;
  text-transform: none;
  /* &:hover {
    opacity: 1;
  } */
  & + & {
    margin-top: 3rem;
  }
`;
export default Home;

import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import bg from "assets/images/background/home-bg.jpg";
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
  function goToOurVision() {
    history.push("/vision");
  }
  return (
    <HomeWrapper>
      <StyledPaper elevation={3}>
        <Title>{`Dyscalculia\nNavigator App`}</Title>
        <ButtonGroup></ButtonGroup>
        <StyledButton
          variant="outlined"
          size="large"
          style={{ textTransform: "none" }}
          onClick={goToDescription}
        >
          What is Dyscalculia?
        </StyledButton>
        <StyledButton
          variant="outlined"
          size="large"
          style={{ textTransform: "none" }}
          onClick={goToTest}
        >
          Test
        </StyledButton>
        <StyledButton
          variant="outlined"
          size="large"
          style={{ textTransform: "none" }}
          onClick={goToPractice}
        >
          Practice
        </StyledButton>
        <StyledButton
          variant="outlined"
          size="large"
          style={{ textTransform: "none" }}
          onClick={goToOurVision}
        >
          Our Vision
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
  white-space: pre-line;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 80px;
`;

const StyledButton = styled(Button)`
  width: 90%;
  height: 4rem;
  text-transform: none;
  & + & {
    margin-top: 2.5rem;
  }
`;
export default Home;

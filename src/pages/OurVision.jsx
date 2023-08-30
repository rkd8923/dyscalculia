import { Button } from "@material-ui/core";
import Paper from "@mui/material/Paper";
import bg from "assets/images/background/report.jpg";
import styled from "styled-components";
import { visionText } from "utils/text";

function OurVision({ history }) {
  return (
    <Wrapper>
      <StyledPaper elevation={3}>
        <Title>Our Vision</Title>
        <MainText>{visionText}</MainText>
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
      </StyledPaper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
`;
const StyledPaper = styled(Paper)`
  max-width: 40rem;
  min-width: 25rem;
  background-color: white;
  padding: 5rem 3rem 3rem;
`;
const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
`;
const MainText = styled.p`
  width: 100%;
  margin: 1.25rem 0;
  font-size: 1.25rem;
  white-space: pre-wrap;
`;
const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;
const StyledButton = styled(Button)``;
export default OurVision;

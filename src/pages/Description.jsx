import { Button } from "@material-ui/core";
import bg from "assets/images/background/report.jpg";
import React from "react";
import styled from "styled-components";
import { definition1, definition2, definition3 } from "utils/text";

function Description({ history }) {
  return (
    <Wrapper>
      <Paper>
        <Title>Definition of Dyscalculia</Title>
        <MainText>{definition1}</MainText>
        <MainText>{definition2}</MainText>
        <MainText>{definition3}</MainText>
        <ButtonArea>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/")}
          >
            home
          </Button>
        </ButtonArea>
      </Paper>
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
const Paper = styled.div`
  width: 75rem;
  background-color: white;
  padding: 3rem;
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
const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export default Description;

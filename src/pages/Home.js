import bg from "assets/images/background/home.jpg";
import React from "react";
import styled from "styled-components";

function Home({ history }) {
  return (
    <HomeWrapper>
      <Title>Dyscalculia</Title>
      <StyledButton onClick={() => history.push("/exam")}>Exam</StyledButton>
    </HomeWrapper>
  );
}
const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-image: url(${bg});
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 600;
  background-color: white;
  border-radius: 2rem;
  width: 50rem;
  height: 10rem;
  opacity: 0.8;
`;

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 600;
  background-color: #c4bcb8;
  border-radius: 2rem;
  width: 40rem;
  height: 8rem;
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
export default Home;

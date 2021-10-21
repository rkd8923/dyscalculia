import bg from "assets/images/background/practice.jpg";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setInit } from "store/practice";
import styled from "styled-components";

export default function Practice({ history }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dispatch) return;
    dispatch(setInit());
  }, [dispatch]);
  function goToDetail(type) {
    history.push({ pathname: "/practice/detail", state: { type } });
  }

  return (
    <Wrapper>
      <Line>
        <TypeCard elevation={3} onClick={() => goToDetail("type1")}>
          Counting
        </TypeCard>
        <TypeCard elevation={3} onClick={() => goToDetail("type2")}>
          Comparison
        </TypeCard>
      </Line>
      <Line>
        <TypeCard elevation={3} onClick={() => goToDetail("type3")}>
          Areithmetic
        </TypeCard>
        <TypeCard elevation={3} onClick={() => goToDetail("type4")}>
          Memorization
        </TypeCard>
      </Line>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
`;
const TypeCard = styled.div`
  width: 19rem;
  height: 9.5rem;
  background-color: rgba(153, 51, 153, 0.9);
  cursor: pointer;
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 600;
  border-radius: 1rem;
  box-shadow: 0.2rem 0.2rem 0.2rem grey;
  &:hover {
    background-color: rgba(153, 51, 153, 1);
  }
`;
const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 640px;
  margin-bottom: 40px;
`;

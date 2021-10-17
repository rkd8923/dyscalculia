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
        <TypeCard onClick={() => goToDetail("type1")}>Counting</TypeCard>
        <TypeCard onClick={() => goToDetail("type2")}>Comparison</TypeCard>
      </Line>
      <Line>
        <TypeCard onClick={() => goToDetail("type3")}>Areithmetic</TypeCard>
        <TypeCard onClick={() => goToDetail("type4")}>Memorization</TypeCard>
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
  width: 300px;
  height: 150px;
  background-color: rgba(153, 51, 153, 0.5);
  cursor: pointer;
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 600;
  border-radius: 20px;
`;
const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 640px;
  margin-bottom: 40px;
`;

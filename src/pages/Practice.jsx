import React from "react";
import styled from "styled-components";
/*
  type1, ... , type4
*/
export default function Practice({ history }) {
  return (
    <Wrapper>
      <TypeCard>Counting</TypeCard>
      <TypeCard>Comparison</TypeCard>
      <TypeCard>Areithmetic</TypeCard>
      <TypeCard>Memorization</TypeCard>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: grey;
  width: 100%;
  height: 100vh;
`;
const TypeCard = styled.div`
  width: 200px;
  height: 100px;
  background-color: red;
`;

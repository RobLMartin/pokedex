import React from "react";
import styled from "styled-components";
import colors from "../../../colors";

const Title = ({ title = "No Title", types = [] }) => (
  <Container>
    <Name>{title.toUpperCase()}</Name>
    <CircleContainer>
      {types.map((item) => (
        <Circle color={colors[item?.type?.name]} key={item?.type?.name} />
      ))}
    </CircleContainer>
  </Container>
);

export default Title;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CircleContainer = styled.div`
  display: flex;
  gap: 1em;
`;

const Circle = styled.div`
  border-radius: 25px;
  background: ${({ color }) => color};
  width: 50px;
  height: 50px;
`;

const Name = styled.h1`
  color: #fff;
  font-size: 4rem;
  font-weight: 100;
`;

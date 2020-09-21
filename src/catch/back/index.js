import React from "react";
import styled from "styled-components";
import { Button } from "../../app/common";

const Back = ({ onClick = (noop) => noop }) => (
  <Container>
    <Button onClick={onClick}>{"< "}MY POKEMON</Button>
  </Container>
);

export default Back;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 2em;
`;

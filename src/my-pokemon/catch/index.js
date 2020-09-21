import React from "react";
import { Button as CommonButton } from "../../app/common";
import styled from "styled-components";

const Catch = (props) => (
  <Container>
    <Button {...props}>CATCH POKEMON</Button>
  </Container>
);

export default Catch;

const Button = styled(CommonButton)`
  color: white;
  background: #eb473f;
`;

const Container = styled.div`
  position: absolute;
  margin-top: 2em;
  margin-left: 2em;
`;

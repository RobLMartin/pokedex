import React from "react";
import { Button as CommonButton } from "../../app/common";
import styled from "styled-components";

const CatchButton = (props) => <Button {...props}>CATCH</Button>;

export default CatchButton;

const Button = styled(CommonButton)`
  background: #eb473f;
  color: white;
`;

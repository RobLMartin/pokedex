import React from "react";
import { Button as CommonButton } from "../../app/common";
import styled from "styled-components";

const CatchButton = (props) => {
  if (props.isVisible) {
    return <Button {...props}>CATCH</Button>;
  } else {
    return null;
  }
};

export default CatchButton;

const Button = styled(CommonButton)`
  background: #eb473f;
  color: white;
`;

import React from "react";
import styled from "styled-components";
import { Button } from "../../app/common";

const Next = (props) => {
  if (props.isVisible) {
    return (
      <Button onClick={props.onClick} {...props}>
        {props.children}
      </Button>
    );
  } else {
    return null;
  }
};

export default Next;

import React from "react";
import styled from "styled-components";
import { Button } from "../../app/common";

const Next = (props) => (
  <Button onClick={props.onClick} {...props}>
    {props.children}
  </Button>
);

export default Next;

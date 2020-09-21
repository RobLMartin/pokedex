import React from "react";
import { Input } from "../../app/common";
import styled from "styled-components";

const Rename = (props) => {
  if (props.isVisible) {
    return <Input {...props} />;
  } else {
    return null;
  }
};

export default Rename;

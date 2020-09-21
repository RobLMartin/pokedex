import React from "react";

import styled from "styled-components";

const Button = styled.button`
  background: lightgrey;
  padding: 1em 2em;
  border-radius: 10px;
  border: none;
  font-weight: 600;
  color: #363636;

  &:hover {
    filter: brightness(1.2);
  }
`;

export { Button };

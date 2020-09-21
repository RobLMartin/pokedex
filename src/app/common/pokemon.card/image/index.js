import React from "react";
import styled from "styled-components";
import Pokeball from "../pokeball.png";

export default ({ img = Pokeball }) => <Image src={img} />;

const Image = styled.img`
  position: absolute;
  right: 0;
  height: 500px;
  top: 0;
  margin-top: 100px;
`;

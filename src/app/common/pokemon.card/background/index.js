import React from "react";
import styled from "styled-components";
import Pokeball from "../pokeball.png";

export default ({ img = Pokeball }) => (
  <Background>
    <WaterMark src={img} />
  </Background>
);

const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const WaterMark = styled.img`
  mix-blend-mode: luminosity;
  height: 800px;
  opacity: 0.1;
`;

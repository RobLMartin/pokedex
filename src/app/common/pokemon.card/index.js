import React from "react";
import styled from "styled-components";
import colors from "../../colors";
import Title from "./title";
import Background from "./background";
import Image from "./image";
import Abilities from "./abilities";

const PokemonCard = (props) => {
  const { name = "My Pokemon", sprites = {}, abilities = [] } = props;
  let pokemonImage;

  if (Object.keys(sprites).length > 0) {
    pokemonImage = sprites?.other["official-artwork"]?.front_default;
  }

  return (
    <Card onClick={props.onClick} className={props.className}>
      <Background img={pokemonImage} />
      <Title title={name} {...props} />
      <Abilities list={abilities} />
      <Image img={pokemonImage} />
    </Card>
  );
};

export { PokemonCard };

const Card = styled.div`
  position: relative;
  width: 1000px;
  height: 600px;
  border-radius: 10px;
  padding: 2em;
  overflow: hidden;
  background: rgb(28, 26, 36);
  box-shadow: 0 20px 50px rgb(28, 26, 36);
  cursor: pointer;
  &:hover {
    filter: brightness(1.1);
  }
`;

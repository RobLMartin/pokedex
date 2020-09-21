import React from "react";
import styled from "styled-components";
import Image from "./image";
import Name from "./name";
import MiniCard from "./mini.card";
import GridList from "./grid.list";

const Roster = ({ list = [], onClick }) => {
  return (
    <div style={{ background: "#1c1a24", overflowY: "scroll" }}>
      <GridList>
        {list.map((pokemon) => (
          <MiniCard key={pokemon.id} onClick={() => onClick(pokemon)}>
            <Image src={pokemon?.sprites?.front_default} />
            <Name>{pokemon?.name?.toUpperCase()}</Name>
          </MiniCard>
        ))}
      </GridList>
    </div>
  );
};

export default Roster;

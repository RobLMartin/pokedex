import React from "react";
import styled from "styled-components";
import colors from "../../app/colors";

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

const GridList = styled.div`
  margin: auto 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: fit-content;
`;

const MiniCard = styled.div`
  background: #2d2b36;
  display: flex;
  border-radius: 10px;
  margin: 2em;
  height: fit-content;
  align-items: center;
`;

const Name = styled.h1`
  color: #fff;
  font-weight: 100;
`;

const Image = styled.img`
  height: 150px;
  width: 150px;
  padding: 1em;
`;

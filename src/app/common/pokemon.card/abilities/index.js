import React from "react";
import styled from "styled-components";

const Abilities = ({ list = [] }) => {
  if (list.length > 0) {
    return (
      <List>
        <Text>
          <strong>ABILITIES</strong>
        </Text>
        {list.map((item) => (
          <Text>{item.ability.name.toUpperCase()}</Text>
        ))}
      </List>
    );
  } else {
    return null;
  }
};

export default Abilities;

const List = styled.div`
  margin-top: 2em;
`;
const Text = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: 200;
`;

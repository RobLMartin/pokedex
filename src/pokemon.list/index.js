import React from "react";
import Button from "@material-ui/core/Button";

const PokemonList = ({ history }) => {
  return (
    <div>
      pokemon list
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/pokedex/catch")}
      >
        Catch a Pokemon
      </Button>
    </div>
  );
};

export default PokemonList;

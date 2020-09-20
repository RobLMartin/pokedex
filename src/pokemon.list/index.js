import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetch_my_pokemon, fetch_pokemon_by_id } from "../app/ducks/pokemon";
import Button from "@material-ui/core/Button";

const PokemonList = ({
  history,
  fetch_my_pokemon,
  my_pokemon,
  fetch_pokemon_by_id,
  selected,
}) => {
  useEffect(() => {
    fetch_my_pokemon();
  }, []);

  return (
    <div>
      {my_pokemon.map((pokemon) => (
        <p>{pokemon.name}</p>
      ))}
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

const mapStateToProps = (state) => {
  return {
    my_pokemon: state.pokemon.my_pokemon,
    selected: state.pokemon.selected,
  };
};

const mapDispatchToProps = {
  fetch_my_pokemon,
  fetch_pokemon_by_id,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);

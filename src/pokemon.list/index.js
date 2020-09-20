import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetch_my_pokemon,
  fetch_pokemon_by_id,
  select_adopted,
} from "../app/ducks/pokemon";
import Button from "@material-ui/core/Button";

const PokemonList = ({
  history,
  fetch_my_pokemon,
  my_pokemon,
  select_adopted,
  fetch_pokemon_by_id,
  selected,
}) => {
  useEffect(() => {
    fetch_my_pokemon();
    handle_get_default_selected();
    return;
  }, []);

  const handle_get_default_selected = () => {
    const default_selected = localStorage.getItem("selected_adopted");

    if (typeof default_selected === "string")
      select_adopted(JSON.parse(default_selected));
  };

  return (
    <div>
      {my_pokemon.map((pokemon) => (
        <p key={pokemon.id} onClick={() => select_adopted(pokemon)}>
          {pokemon.name}
        </p>
      ))}
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/pokedex/catch")}
      >
        Catch a Pokemon
      </Button>
      <p>{selected?.name}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    my_pokemon: state.pokemon.my_pokemon,
    selected: state.pokemon.selected_adopted,
  };
};

const mapDispatchToProps = {
  fetch_my_pokemon,
  fetch_pokemon_by_id,
  select_adopted,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);

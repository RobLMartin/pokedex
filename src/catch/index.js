import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  fetch_wild_pokemon,
  fetch_pokemon_by_id,
  deselect_pokemon,
  catch_pokemon,
  clear_wild_pokemon,
} from "../app/ducks/pokemon";

const Catch = ({
  fetch_wild_pokemon,
  wild_pokemon,
  fetch_pokemon_by_id,
  deselect_pokemon,
  catch_pokemon,
  clear_wild_pokemon,
  selected,
}) => {
  useEffect(() => {
    fetch_wild_pokemon();

    return clear_wild_pokemon();
  }, []);
  return (
    <div>
      {wild_pokemon.map((pokemon) => (
        <p key={pokemon.url} onClick={() => fetch_pokemon_by_id(pokemon.url)}>
          {pokemon.name}
        </p>
      ))}
      <hr />
      <p
        // onClick={() => deselect_pokemon()}
        onClick={() => catch_pokemon(selected)}
      >
        {selected?.name}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    wild_pokemon: state.pokemon.wild_pokemon,
    selected: state.pokemon.selected,
    is_loading: state.pokemon.is_loading,
  };
};

const mapDispatchToProps = {
  fetch_wild_pokemon,
  fetch_pokemon_by_id,
  deselect_pokemon,
  catch_pokemon,
  clear_wild_pokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(Catch);

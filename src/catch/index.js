import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  fetch_wild_pokemon,
  fetch_pokemon_by_id,
  deselect_pokemon,
  catch_pokemon,
  clear_wild_pokemon,
} from "../app/ducks/pokemon";
<<<<<<< Updated upstream
=======
import PokemonCard from "./pokemon.card";
import Layout from "./layout";
import Back from "./back";
import Next from "./next";
import CatchButton from "./catch.button";
import Controls from "./controls";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
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
=======
    <Layout>
      <Back onClick={() => history.push("/pokedex")} />
      {wild_pokemon.length > 0 && (
        <div style={{ margin: "auto" }}>
          <PokemonCard
            key={wild_pokemon[page].url}
            name={wild_pokemon[page]?.name}
            {...selected}
            onClick={() => fetch_pokemon_by_id(wild_pokemon[page].url)}
          />
          <Controls>
            <CatchButton
              onClick={() => handle_catch(selected)}
              isVisible={selected}
            />
            <Next onClick={handle_change_page} isVisible={page < 9}>
              NEXT {page + 1 + "-" + wild_pokemon.length}
            </Next>
          </Controls>
        </div>
      )}
    </Layout>
>>>>>>> Stashed changes
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

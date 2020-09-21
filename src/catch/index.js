import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  fetch_wild_pokemon,
  fetch_pokemon_by_id,
  deselect_wild,
  catch_pokemon,
  clear_wild_pokemon,
} from "../app/ducks/pokemon";
import PokemonCard from "./pokemon.card";
import Layout from "./layout";
import Back from "./back";
import Next from "./next";
import CatchButton from "./catch.button";

const Catch = ({
  fetch_wild_pokemon,
  wild_pokemon,
  fetch_pokemon_by_id,
  deselect_wild,
  catch_pokemon,
  clear_wild_pokemon,
  selected,
  history,
}) => {
  const [page, setPage] = useState(0);
  useEffect(() => {
    fetch_wild_pokemon();

    return () => {
      deselect_wild();
      clear_wild_pokemon();
    };
  }, []);

  const handle_change_page = () => {
    deselect_wild();
    if (page < 9) {
      setPage(page + 1);
    }
  };

  const handle_catch = (pokemon) => {
    catch_pokemon(pokemon);
    history.push("/pokedex");
  };

  return (
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
          <div
            style={{
              display: "flex",
              gap: "1em",
              justifyContent: "flex-end",
              marginTop: "3em",
            }}
          >
            {selected && <CatchButton onClick={() => handle_catch(selected)} />}
            {page < 9 && (
              <Next onClick={handle_change_page}>
                NEXT {page + 1 + "-" + wild_pokemon.length}
              </Next>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    wild_pokemon: state.pokemon.wild_pokemon,
    selected: state.pokemon.selected_wild,
    is_loading: state.pokemon.is_loading,
  };
};

const mapDispatchToProps = {
  fetch_wild_pokemon,
  fetch_pokemon_by_id,
  deselect_wild,
  catch_pokemon,
  clear_wild_pokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(Catch);

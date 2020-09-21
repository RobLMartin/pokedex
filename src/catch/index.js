import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  fetch_wild_pokemon,
  fetch_pokemon_by_id,
  deselect_wild,
  catch_pokemon,
  clear_wild_pokemon,
  rename_pokemon,
} from "../app/ducks/pokemon";
import PokemonCard from "./pokemon.card";
import Layout from "./layout";
import Back from "./back";
import Next from "./next";
import CatchButton from "./catch.button";
import Controls from "./controls";
import Rename from "./rename";

const Catch = ({
  fetch_wild_pokemon,
  wild_pokemon,
  fetch_pokemon_by_id,
  deselect_wild,
  catch_pokemon,
  clear_wild_pokemon,
  selected,
  rename_pokemon,
  history,
}) => {
  const [page, setPage] = useState(0);
  const [new_name, setNewName] = useState("");

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
    history.push("/");
  };

  return (
    <Layout>
      <Back onClick={() => history.push("/")} />
      {wild_pokemon.length > 0 && (
        <div style={{ margin: "auto" }}>
          <PokemonCard
            key={wild_pokemon[page].url}
            name={wild_pokemon[page]?.name}
            {...selected}
            onClick={() => fetch_pokemon_by_id(wild_pokemon[page].url)}
          />
          <Controls>
            <Rename
              isVisible={selected}
              onChange={(e) => rename_pokemon(e.target.value, selected)}
            />
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
  rename_pokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(Catch);

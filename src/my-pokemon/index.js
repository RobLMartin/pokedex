import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetch_my_pokemon,
  fetch_pokemon_by_id,
  select_adopted,
} from "../app/ducks/pokemon";
import Layout from "./layout";
import PokemonCard from "./pokemon.card";
import Roster from "./roster";
import Catch from "./catch";

const MyPokemon = ({
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
    <Layout>
      <Catch onClick={() => history.push("/catch")} />
      <PokemonCard Classname="" {...selected} />
      <Roster list={my_pokemon} onClick={select_adopted} />
    </Layout>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyPokemon);

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PokemonList from "../pokemon.list";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/pokedex" component={PokemonList} />
      </Switch>
    </Router>
  );
}

export default App;

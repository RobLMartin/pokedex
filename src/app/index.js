import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Canvas } from "./common";
import PokemonList from "../pokemon.list";

function App() {
  return (
    <Canvas>
      <Router>
        <Switch>
          <Route exact path="/pokedex" component={PokemonList} />
        </Switch>
      </Router>
    </Canvas>
  );
}

export default App;

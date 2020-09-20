import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Canvas } from "./common";
import PokemonList from "../pokemon.list";
import Catch from "../catch";

import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Canvas>
        <Router>
          <Switch>
            <Route exact path="/pokedex" component={PokemonList} />
            <Route path="/pokedex/catch" component={Catch} />
          </Switch>
        </Router>
      </Canvas>
    </Provider>
  );
}

export default App;

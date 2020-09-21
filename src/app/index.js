import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Canvas } from "./common";
import MyPokemon from "../my-pokemon";
import Catch from "../catch";

import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Canvas>
            <Route exact path="/" component={MyPokemon} />
            <Route path="/catch" component={Catch} />
          </Canvas>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

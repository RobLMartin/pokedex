export const GET_POKEMON = "pokedex/pokemon/GET_POKEMON";
export const GET_POKEMON_BY_ID = "pokedex/pokemon/GET_POKEMON_BY_ID";
export const DESELECT_WILD = "pokedex/pokemon/DESELECT_WILD";
export const SELECT_ADOPTED = "pokedex/pokemon/SELECT_ADOPTED";
export const CLEAR_WILD_POKEMON = "pokedex/pokemon/CLEAR_WILD_POKEMON";
export const GET_MY_POKEMON = "pokedex/pokemon/GET_MY_POKEMON";
export const CATCH_POKEMON = "pokedex/pokemon/CATCH_POKEMON";
export const IS_LOADING = "pokedex/pokemon/IS_LOADING";
export const HAS_ERRORED = "pokedex/pokemon/HAS_ERRORED";

const INITIAL_STATE = {
  my_pokemon: [],
  wild_pokemon: [],
  selected_wild: null,
  selected_adopted: null,
  error: null,
  is_loading: false,
};

export default function pokemon(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_POKEMON:
      return { ...state, wild_pokemon: payload };
    case GET_MY_POKEMON:
      return { ...state, my_pokemon: payload };
    case GET_POKEMON_BY_ID:
      return { ...state, selected_wild: payload };
    case DESELECT_WILD:
      return { ...state, selected_wild: null };
    case SELECT_ADOPTED:
      return { ...state, selected_adopted: payload };
    case CLEAR_WILD_POKEMON:
      return { ...state, wild_pokemon: [] };
    case CATCH_POKEMON:
      return { ...state, my_pokemon: [payload, ...state.my_pokemon] };
    case IS_LOADING:
      return { ...state, is_loading: payload };
    case HAS_ERRORED:
      return { ...state, error: payload };
    default:
      return state;
  }
}

export const fetch_wild_pokemon = () => (dispatch) => {
  const offset = Math.floor(Math.random() * 1040);
  const limit = 10;
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  dispatch({ type: IS_LOADING, payload: true });

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: IS_LOADING, payload: false });
      dispatch({ type: GET_POKEMON, payload: data.results });
    })
    .catch((err) => {
      dispatch({ type: IS_LOADING, payload: false });
      dispatch({ type: HAS_ERRORED });
    });
};

export const fetch_my_pokemon = () => (dispatch) => {
  dispatch({ type: IS_LOADING, payload: true });

  let my_pokemon = [];
  const retrieved_data = localStorage.getItem("my_pokemon");
  if (typeof retrieved_data === "string") {
    my_pokemon = JSON.parse(retrieved_data);
  }

  dispatch({ type: IS_LOADING, payload: false });
  dispatch({ type: GET_MY_POKEMON, payload: my_pokemon });
};

export const fetch_pokemon_by_id = (url) => (dispatch) => {
  dispatch({ type: IS_LOADING, payload: true });
  fetch(url)
    .then((res) => res.json())
    .then((pokemon) => {
      dispatch({ type: IS_LOADING, payload: false });
      dispatch({ type: GET_POKEMON_BY_ID, payload: pokemon });
    })
    .catch((err) => {
      dispatch({ type: IS_LOADING, payload: false });
      dispatch({ type: HAS_ERRORED, payload: err });
    });
};

export const deselect_wild = () => (dispatch) => {
  dispatch({ type: DESELECT_WILD });
};

export const select_adopted = (selected_pokemon) => (dispatch) => {
  dispatch({ type: SELECT_ADOPTED, payload: selected_pokemon });

  if (typeof selected_pokemon === "object") {
    localStorage.setItem("selected_adopted", JSON.stringify(selected_pokemon));
  }
};

export const clear_wild_pokemon = () => (dispatch) => {
  dispatch({ type: CLEAR_WILD_POKEMON });
};

export const catch_pokemon = (pokemon) => (dispatch) => {
  dispatch({ type: IS_LOADING, payload: true });
  dispatch({ type: CATCH_POKEMON, payload: pokemon });

  let my_pokemon = [];
  const retrieved_data = localStorage.getItem("my_pokemon");
  if (typeof retrieved_data === "string") {
    my_pokemon = JSON.parse(retrieved_data);
  }

  const update_my_pokemon = [pokemon, ...my_pokemon];
  const store_data = JSON.stringify(update_my_pokemon);

  localStorage.setItem("my_pokemon", store_data);
  dispatch({ type: DESELECT_WILD });
  dispatch({ type: IS_LOADING, payload: false });
};

(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{32:function(e,n,o){e.exports=o(44)},37:function(e,n,o){},44:function(e,n,o){"use strict";o.r(n);var t=o(0),a=o.n(t),c=o(13),r=o.n(c),p=(o(37),o(30)),l=o(2),i=o(23);function m(){var e=Object(i.a)(["\n  height: 100vh;\n  width: 100vw;\n"]);return m=function(){return e},e}var u=o(24).a.div(m()),d=o(15),_=o(19),k=o(5),y="pokedex/pokemon/GET_POKEMON",f="pokedex/pokemon/DESELECT_POKEMON",s="pokedex/pokemon/GET_MY_POKEMON",O="pokedex/pokemon/CATCH_POKEMON",h="pokedex/pokemon/IS_LOADING",E="pokedex/pokemon/HAS_ERRORED",b={my_pokemon:[],wild_pokemon:[],selected:null,error:null,is_loading:!1};var v=function(e){return function(n){n({type:h,payload:!0}),fetch(e).then((function(e){return e.json()})).then((function(e){n({type:h,payload:!1}),n({type:"pokedex/pokemon/GET_POKEMON_BY_ID",payload:e})})).catch((function(e){n({type:h,payload:!1}),n({type:E,payload:e})}))}},j=o(58),w={fetch_my_pokemon:function(){return function(e){e({type:h,payload:!0});var n=[],o=localStorage.getItem("my_pokemon");"string"===typeof o&&(n=JSON.parse(o)),e({type:h,payload:!1}),e({type:s,payload:n})}},fetch_pokemon_by_id:v},g=Object(d.b)((function(e){return{my_pokemon:e.pokemon.my_pokemon,selected:e.pokemon.selected}}),w)((function(e){var n=e.history,o=e.fetch_my_pokemon,c=e.my_pokemon;e.fetch_pokemon_by_id,e.selected;return Object(t.useEffect)((function(){o()}),[]),a.a.createElement("div",null,c.map((function(e){return a.a.createElement("p",null,e.name)})),a.a.createElement(j.a,{variant:"contained",color:"primary",onClick:function(){return n.push("/pokedex/catch")}},"Catch a Pokemon"))})),x={fetch_wild_pokemon:function(){return function(e){var n=Math.floor(1040*Math.random()),o="https://pokeapi.co/api/v2/pokemon?offset=".concat(n,"&limit=").concat(10);e({type:h,payload:!0}),fetch(o).then((function(e){return e.json()})).then((function(n){e({type:h,payload:!1}),e({type:y,payload:n.results})})).catch((function(n){e({type:h,payload:!1}),e({type:E})}))}},fetch_pokemon_by_id:v,deselect_pokemon:function(){return function(e){e({type:f})}},catch_pokemon:function(e){return function(n){n({type:h,payload:!0}),n({type:O,payload:e});var o=[],t=localStorage.getItem("my_pokemon");"string"===typeof t&&(o=JSON.parse(t));var a=[e].concat(Object(_.a)(o)),c=JSON.stringify(a);localStorage.setItem("my_pokemon",c),n({type:f}),n({type:h,payload:!1})}},clear_wild_pokemon:function(){return function(e){e({type:"pokedex/pokemon/CLEAR_WILD_POKEMON"})}}},N=Object(d.b)((function(e){return{wild_pokemon:e.pokemon.wild_pokemon,selected:e.pokemon.selected,is_loading:e.pokemon.is_loading}}),x)((function(e){var n=e.fetch_wild_pokemon,o=e.wild_pokemon,c=e.fetch_pokemon_by_id,r=(e.deselect_pokemon,e.catch_pokemon),p=e.clear_wild_pokemon,l=e.selected;return Object(t.useEffect)((function(){return n(),p()}),[]),a.a.createElement("div",null,o.map((function(e){return a.a.createElement("p",{key:e.url,onClick:function(){return c(e.url)}},e.name)})),a.a.createElement("hr",null),a.a.createElement("p",{onClick:function(){return r(l)}},null===l||void 0===l?void 0:l.name))})),S=o(11),I=Object(S.c)({pokemon:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0,o=n.type,t=n.payload;switch(o){case y:return Object(k.a)(Object(k.a)({},e),{},{wild_pokemon:t});case s:return Object(k.a)(Object(k.a)({},e),{},{my_pokemon:t});case"pokedex/pokemon/GET_POKEMON_BY_ID":return Object(k.a)(Object(k.a)({},e),{},{selected:t});case f:case"pokedex/pokemon/CLEAR_WILD_POKEMON":return Object(k.a)(Object(k.a)({},e),{},{selected:null});case O:return Object(k.a)(Object(k.a)({},e),{},{my_pokemon:[t].concat(Object(_.a)(e.my_pokemon))});case h:return Object(k.a)(Object(k.a)({},e),{},{is_loading:t});case E:return Object(k.a)(Object(k.a)({},e),{},{error:t});default:return e}}}),M=[o(29).a],D=Object(S.e)(I,{},window.window.__REDUX_DEVTOOLS_EXTENSION__?Object(S.d)(S.a.apply(void 0,M),window.__REDUX_DEVTOOLS_EXTENSION__()):Object(S.d)(S.a.apply(void 0,M)));var T=function(){return a.a.createElement(d.a,{store:D},a.a.createElement(u,null,a.a.createElement(p.a,null,a.a.createElement(l.c,null,a.a.createElement(l.a,{exact:!0,path:"/pokedex",component:g}),a.a.createElement(l.a,{path:"/pokedex/catch",component:N})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.403bd647.chunk.js.map
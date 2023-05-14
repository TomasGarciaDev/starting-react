import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import pokemon from "./pokemon.json";

const PokemonRow = ({ pokemon }) => (
  <tr key={pokemon.id}>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.string,
};

function App() {
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Pokemon Search</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.slice(0, 20).map((pokemon) => (
            <PokemonRow key={pokemon.id} pokemon={pokemon} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./pokedex.scss";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState();
  const [search, setSearch] = useState("");

  const requestPokemon = async () => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data)
        console.log(data)
      });
  };

  //Definindo squirtle como pokemon inicial da página
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/squirtle`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        console.log(pokemon);
      });
  }, []);

  return (
    <div className="pokedex">
      <h1>POKEDEX</h1>
      <div className="searchBox">
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        ></input>
        <button onClick={requestPokemon}>Buscar</button>
      </div>
      <h3>{pokemon?.name.toUpperCase()}</h3>
      <div className="pokeInfo">
        <div className="pokeImage">
          <img
            src={pokemon?.sprites.front_default}
            className="pokeImg"
            alt="pokemon"
          />
        </div>
        <div className="infoTable">
          <table>
            <tr>
              <th>Type</th>
              <td>
                {pokemon?.types.map((poke) => {
                  return <span>{poke.type.name} </span>;
                })}
              </td>
            </tr>
            <tr>
              <th>Height</th>
              <td>{pokemon?.height}</td>
            </tr>
            <tr>
              <th>Weight</th>
              <td>{pokemon?.weight}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;

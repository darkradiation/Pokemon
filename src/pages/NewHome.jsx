// Main.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Pokeinfo from "../components/Pokemon";
import ErrorMessage from "../components/ErrorMessage";
import SearchBar from "../components/SearchBar";

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();
  const [selectedType, setSelectedType] = useState("");
  const [POTD, setPOTD] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemonData = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    await getPokemon(res.data.results);
    setLoading(false);
  };

  const getRandomPokemonOfTheDay = async () => {
    const randomPokemonId = Math.floor(Math.random() * 898) + 1;
    const randomPokemonData = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`
    );
    setPokeDex(randomPokemonData.data);
  };

  const getPokemon = async (res) => {
    const promises = res.map((item) => axios.get(item.url));
    const results = await Promise.all(promises);
    const pokemonData = results.map((result) => result.data);

    if (selectedType) {
      pokemonData = pokemonData.filter((pokemon) =>
        pokemon.types.some((type) => type.type.name === selectedType)
      );
    }

    setPokeData((state) => {
      state = [...state, ...pokemonData];
      state.sort((a, b) => (a.id > b.id ? 1 : -1));
      return state;
    });
    getRandomPokemonOfTheDay();
  };

  const setPotd = () => {
    setPOTD(false);
  };

  useEffect(() => {
    fetchPokemonData();
  }, [url, selectedType]);

  return (
    <>
      <div className="container">
        <SearchBar
          setPokeDex={setPokeDex}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          setError={setError}
        />
        <div className="left-container">
          <Card
            pokemon={pokeData}
            loading={loading}
            infoPokemon={(poke) => setPokeDex(poke)}
            setPotdFalse={setPotd}
            selectedType={selectedType}
          />
          <div className="navigation-buttons">
            <button
              className="navigation-button"
              prevUrl
              onClick={() => {
                setPokeData([]);
                setUrl(prevUrl);
              }}
            >
              Previous
            </button>
            <button
              className="navigation-button"
              onClick={() => {
                setPokeData([]);
                setUrl(nextUrl);
              }}
            >
              Next
            </button>
          </div>
        </div>
        <div className="right-container">
          {POTD && <h2 className="right-heading">Pokemon of the day</h2>}
          {!POTD && <h2 className="right-heading">Pokemon Info</h2>}
          <Pokeinfo data={pokeDex} />
          <ErrorMessage error={error} />
        </div>
      </div>
    </>
  );
};

export default Main;

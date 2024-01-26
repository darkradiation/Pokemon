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
  const typeURL = "https://pokeapi.co/api/v2/type/";

  const getRandomPokemonOfTheDay = async () => {
    const randomPokemonId = Math.floor(Math.random() * 898) + 1;
    const randomPokemonData = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`
    );
    setPokeDex(randomPokemonData.data);
  };

  const fetchPokemonData = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    await getPokemon(res.data.results);
    setLoading(false);
  };
  const getPokemon = async (res) => {
    const promises = res.map((item) => axios.get(item.url));
    const results = await Promise.all(promises);
    const pokemonData = results.map((result) => result.data);
    // setPokeData((state) => {
    //   state = [...state, ...pokemonData];
    //   state.sort((a, b) => (a.id > b.id ? 1 : -1));
    //   return state;
    // });
    setPokeData(pokemonData);
    getRandomPokemonOfTheDay();
  };

  const setPotd = () => {
    setPOTD(false);
  };

  const fetchPokemonDataByType = async () => {
    setLoading(true);
    const d = await axios.get(typeURL + selectedType);
    await getPokemonByType(d.data.pokemon);
    setLoading(false);
  };

  const getPokemonByType = async (res) => {
    const promises = res.map((item) => axios.get(item.pokemon.url));
    const results = await Promise.all(promises);
    const pokemonData = results.map((result) => result.data);

    // Replace the existing state with the new data
    setPokeData(pokemonData);
  };

  useEffect(() => {
    if (selectedType === "" || selectedType === null) {
      console.log("fetching pokemons");
      fetchPokemonData();
      console.log(pokeDex);
    } else {
      console.log("fetching pokemons by type");
      fetchPokemonDataByType();
      console.log(pokeDex);
    }
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

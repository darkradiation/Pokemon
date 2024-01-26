import React from "react";

const Pokeinfo = ({ data }) => {
  const baseURL1 =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/";
  const extension1 = ".gif";
  const baseURL2 =
    "https://raw.githubusercontent.com/PokeAPI/sprites/ffcfbee3af68e186b6dc815316d39eb420b2e5f4/sprites/pokemon/other/dream-world/";
  const extension2 = ".svg";
  return (
    <>
      {!data ? (
        ""
      ) : (
        <div className="pokeinfo">
          <h1>{data.name}</h1>
          {/* <img src={baseURL2 + data.id + extension2} alt="" /> */}
          {data.sprites.other.dream_world.front_default ? (
            <img src={data.sprites.other.dream_world.front_default} alt="" />
          ) : (
            <img src={data.sprites.other.home.front_default} alt="" />
          )}
          {/* <img src={baseURL1 + data.id + extension1} alt="" /> */}
          {/* <img src={data.sprites.front_default} alt="" /> */}

          {/* <img src={data.sprites.front_shiny} alt="" /> */}
          <div className="abilities">
            <h3>Types</h3>
            <ul>
              {data.types.map((poke) => {
                return (
                  <>
                    <li>{poke.type.name}</li>
                  </>
                );
              })}
            </ul>
            <h3>Abilities</h3>
            <ul>
              {data.abilities.map((poke) => {
                return (
                  <>
                    <li>{poke.ability.name}</li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="base-stat">
            <h3>Base Stats</h3>
            <ul>
              {data.stats.map((poke) => {
                return (
                  <>
                    <li>
                      {poke.stat.name}:{poke.base_stat}
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Pokeinfo;

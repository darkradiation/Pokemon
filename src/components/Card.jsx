import React from "react";
const Card = ({ pokemon, loading, infoPokemon, setPotdFalse }) => {
  // console.log(pokemon);
  const baseURL1 =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/";
  const extension1 = ".gif";
  const baseURL2 =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/female/";
  const extension2 = ".gif";
  const baseURL3 =
    "https://raw.githubusercontent.com/PokeAPI/sprites/ffcfbee3af68e186b6dc815316d39eb420b2e5f4/sprites/pokemon/other/dream-world/";
  const extension3 = ".svg";
  const baseURL4 =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/";
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <div
                className="card"
                key={item.id}
                onClick={() => {
                  infoPokemon(item);
                  setPotdFalse();
                }}
              >
                {/* <h2>{item.id}</h2> */}
                {item.sprites.other.showdown.front_default ? (
                  <img
                    src={item.sprites.other.showdown.front_default}
                    alt=""
                    srcset=""
                  />
                ) : (
                  <img src={item.sprites.other.home.front_default} alt="" />
                )}

                {/* <img src={baseURL1 + item.id + extension1} alt="" /> */}
                {/* {console.log(item.name + " " + item.id)} */}
                <h2>{item.name}</h2>
              </div>
            </>
          );
        })
      )}{" "}
    </>
  );
};

export default Card;

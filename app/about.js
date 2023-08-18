const fetchFavoritePokemon = async () => {

  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/eevee`);
  const result = await data.json();
  
  console.log({ result: result.sprites.front_default });
  const imageSrc = result.sprites.front_default;
  
  const newPokemonImage = document.createElement("img");
  newPokemonImage.setAttribute("id", "pokemon_image");
  newPokemonImage.setAttribute("height", "300px");
  newPokemonImage.setAttribute("src", imageSrc);
  
  document.getElementById("pokemon_image_wrapper").appendChild(newPokemonImage);
}

fetchFavoritePokemon()

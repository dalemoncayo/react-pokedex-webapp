import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import PokemonCard from "../components/PokemonCard";
import { Pokemon } from "../utils/types";
import Server from "../server/Server";
import SearchInput from "../components/SearchInput";
import TypeDropdown from "../components/TypeDropdown";
import Message from "../components/Message";

function Pokedex() {
  const [pokemonList, setPokemonList] = useState<Pokemon[] | null>(null);
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");

  useEffect(() => {
    if (pokemonList === null) {
      Server.getPokemonList()
        .then((data) => setPokemonList(data))
        .catch((error) => console.error('Error:', error));
    }
  }, [pokemonList]);

  const filteredPokemonList = pokemonList
    ? pokemonList.filter((pokemon: Pokemon) => {
      const nameMatch = pokemon.name.toLowerCase().includes(searchInput.toLowerCase());
      const typeMatch = selectedType === "" || pokemon.type.includes(selectedType);
      return nameMatch && typeMatch;
    }) : [];

  return (
    <div className="container">

      <div style={{ marginTop: '20px', marginBottom: '50px' }}>
        <SearchInput value={searchInput} onChange={setSearchInput} />
        <TypeDropdown selectedType={selectedType} onChange={setSelectedType} />
      </div>

      <div className="row">
        {filteredPokemonList.length > 0 ? (
          filteredPokemonList.map((pokemon: Pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          pokemonList ? <Message message={'No matching Pokemon found.'} /> : <Spinner />
        )}
      </div>
    </div>
  );
}

export default Pokedex;
import { Pokemon } from "../utils/types";

type PokemonCardProps = {
  pokemon: Pokemon;
};

function PokemonCard(props: PokemonCardProps) {
  const { pokemon } = props
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center" style={{ cursor: 'pointer' }}>
      <div style={{ padding: '20px', marginBottom: '20px', border: 'solid 1px #e3e3e3', borderRadius: '10px' }}>
        <img src={pokemon.imageUrl} className="card-img-top" alt={pokemon.name} />
        <div style={{ paddingTop: '20px' }}>
          <h6 className="">{pokemon.name}</h6>
          <p style={{ fontSize: '14px' }}>
            HP: {pokemon.hp}<br />
            Attack: {pokemon.attack} (SP: {pokemon.spAttack})<br />
            Defense: {pokemon.defense} (SP: {pokemon.spDefense})<br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
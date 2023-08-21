import axios from 'axios';
const baseURL = "https://pokeapi.co/api/v2"
export const imageURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

export type PokemonProps = {
  name: string,
  url: string
}

type DataProps = {
  data: {
    count: number,
    next: string,
    previous: string | null,
    results: PokemonProps[]
  }
}

export const fecthPokemons = async (next: number = 0) => {
  const { data }: DataProps = await axios.get(`${baseURL}/pokemon?offset=${next}&limit=10`)

  return data.results;
}

export const fecthPokemon = async () => {
  const { data }: DataProps = await axios.get(`${baseURL}/pokemon`)

  return data.results;
}
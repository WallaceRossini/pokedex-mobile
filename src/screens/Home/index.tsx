import { useEffect, useState } from "react";
import { Container, Title } from "./styles";
import { PokemonProps, fecthPokemon, fecthPokemons } from "@utils/axios";
import { FlatList } from "react-native";
import { PokemonCard } from "@components/PokemonCard";

export function Home() {

  const [pokemons, setPokemons] = useState<PokemonProps[]>([])
  const [offset, setOffset] = useState<number>(0)
  const [loading, setLoading] = useState(true)

  async function fetchMorePokemons() {
    console.log(offset)
    const data = await fecthPokemons(offset)
    setOffset(prevState => prevState += 20)
    setPokemons(prevStart => [...prevStart, ...data])
    setLoading(false)
  }

  useEffect(() => {
  }, [])

  return (
    <Container>
      <Title>
        Pokedex
      </Title>
      <FlatList
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.name}
        renderItem={({ item }) => (
          <PokemonCard
            name={item.name}
            url={item.url}
          />
        )}
        onEndReached={fetchMorePokemons}
        onEndReachedThreshold={0.3}
        contentContainerStyle={pokemons.length === 0 && { flex: 1 }}

      />
    </Container>
  )
}
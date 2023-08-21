import { TouchableOpacityProps } from "react-native";
import { Container, PokemonImage, Title } from "./styles";
import { imageURL } from "@utils/axios";

type Props = TouchableOpacityProps & {
  name: string;
  url: string;
}


export function PokemonCard({ name, url, ...rest }: Props) {

  function getImagePokemon(){
    const [,id] = url.match(/\/(\d+)\/$/) || [];

    return `${imageURL}/${id}.png`
  }

  return (
    <Container {...rest}>
      <PokemonImage source={{uri: getImagePokemon()}}/>
      <Title>
        {name}
      </Title>
    </Container>
  )
}
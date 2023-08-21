import { Home } from '@screens/Home';
import {useFonts} from "expo-font"
import FontPokemonClassic from './src/assets/fonts/pokemon_classic.ttf'

export default function App() {
  const [fontsLoaded] = useFonts({
    'Pokemon_Classic': FontPokemonClassic
  })

  return (
   <Home /> 
  );
}
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'


export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: #E1E1E6;
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  padding: 16px;
  margin-bottom: 12px;
`

export const Title = styled.Text`
  font-size: 14px;
  font-family: Pokemon_Classic;
  color: #000000;
  text-transform: uppercase;
`

export const PokemonImage = styled.Image`
  width: 56px;
  height: 100%;

  margin-right: 12px;
`
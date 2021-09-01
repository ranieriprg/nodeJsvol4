import { useState, useContext } from "react";
import { PokemonContext, PokemonContextProvider } from '../contexts/pokemons'
import { Card } from '../components/card'

export default function Index() {
  return (

    <div>
      <PokemonContextProvider>
        <Card/>
      </PokemonContextProvider>
    </div>
  );
}
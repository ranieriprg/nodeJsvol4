import { createContext, useState, useContext } from "react";

export const PokemonContext = createContext({});

export function PokemonContextProvider({ children }) {
    let [pokemon, setPokemon] = useState('Pokemon');

    return (
        <PokemonContext.Provider value={{
            pokemon,
            setPokemon
        }}>
            {children}
        </PokemonContext.Provider>
    )
}

export function usePokemon() {
    const context = useContext(PokemonContext);
    return context;
}
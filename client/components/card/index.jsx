import { useState } from 'react'
import  styles  from './card.module.css'
import { usePokemon } from '../../contexts/pokemons'


export function Card() {
    let { pokemon, setPokemon } = usePokemon()

    return (
        <div>
            <h1 className={styles.Cor}>{pokemon}</h1>
            <button onClick={() => setPokemon('Charizard')}>Mudar nome</button>
        </div>
    )
}
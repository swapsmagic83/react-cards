import React, { useState } from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import { useAxios } from "./hooks/useAxios";
import pokemon from "./pokemonList";
/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  
  const [cards,addCard,clearCards] = useAxios('cards',`https://pokeapi.co/api/v2/pokemon`)
    return (
      <div className="PokeDex">
        <div className="PokeDex-buttons">
          <h3>Please select your pokemon:</h3>
          <PokemonSelect add={addCard} />
        </div>
        <button onClick={clearCards}>Clear Table</button>
        <div className="PokeDex-card-area">
          {cards.map(card => (
            <PokemonCard
              key={card.card.id} {...card}
              name={card.card.forms[0].name}
              front={card.card.sprites.front_default}
              back={card.card.sprites.back_default}
              stats={card.card.stats}
            
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;

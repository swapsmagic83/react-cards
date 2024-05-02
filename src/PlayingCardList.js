import React, { useState } from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import { getCard } from "./helpers";
import {useAxios,useLocalStorage} from "./hooks/useAxios"

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
 
  const [cards, addCard,clearCards] = useAxios('cards',"https://deckofcardsapi.com/api/deck/new/draw/" )
 
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={()=>addCard(getCard)}>Add a playing card!</button>
        <button onClick={clearCards}>Clear Table</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(card =>(
          <PlayingCard key={card.card.id} front={card.card.cards[0].image}/>
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;

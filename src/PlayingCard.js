import React, { useState } from "react";
import useFlip from "./hooks/useFlip"
import backOfCard from "./back.png";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
 
  const [isFacingUp,toggleFlip] =useFlip()
 
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={toggleFlip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;

import React, {useState, useEffect} from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

function DeckItem ({card}) {
    const [quantity, setQuantity] = useState(1)
    useEffect (()=> {
        if (Boolean(card.deckAmount) === false) {card.deckAmount = 1}
    },[])
    function handleChange (e) {
        setQuantity(e.target.value)
        card.deckAmount = e.target.value
    }
    return (
    <li>{card.stripped_title}
                    <ToggleButtonGroup aria-label="Quantity Buttons" color="primary" exclusive={true} value={quantity} onChange={handleChange}>
                        <ToggleButton aria-label="1 Button" value={1}>1</ToggleButton>
                        <ToggleButton aria-label="2 Button" value={2}>2</ToggleButton>
                        <ToggleButton aria-label="3 Button" value={3}>3</ToggleButton>
                        </ToggleButtonGroup></li>
    )
}

export default DeckItem
import React, {useState, useEffect} from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";


function DeckItem ({card, deckState, setDeckState}) {
    //quantity/setQuanity are not going to play nice when I add the import functionality - need to reconsider here.
    const [quantity, setQuantity] = useState(card.deckAmount)
    function handleChange (e) {
        setQuantity(parseInt(e.target.value))
        onQuantityChange(parseInt(e.target.value))
    }
    function onQuantityChange(val) {
        let dCard = card
        dCard.deckAmount = val
        let nDeckState = deckState.filter((ocard)=> {
            if (ocard.stripped_title != card.stripped_title) return true
        })
        nDeckState = [...nDeckState, dCard]
        setDeckState(nDeckState)}
    
    return (
    <li>{card.stripped_title}
                    <ToggleButtonGroup aria-label="Quantity Buttons" color="secondary" exclusive={true} value={quantity} onChange={handleChange}>
                        <ToggleButton aria-label="1 Button" value={1}>{1}</ToggleButton>
                        <ToggleButton aria-label="2 Button" value={2}>{2}</ToggleButton>
                        <ToggleButton aria-label="3 Button" value={3}>{3}</ToggleButton>
                        </ToggleButtonGroup></li>
    )
}

export default DeckItem
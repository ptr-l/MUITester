import React, {useState} from "react";
import { ListItem, ToggleButton, ToggleButtonGroup, Button } from "@mui/material";


function DeckItem ({card, deckState, setDeckState}) {
    //quantity/setQuanity are not going to play nice when I add the import functionality - need to reconsider here.
    const [quantity, setQuantity] = useState(card.deckAmount)
    function handleChange (e) {
        setQuantity(parseInt(e.target.value))
        onQuantityChange(parseInt(e.target.value))
    }
    function deleteCard(e) {
        let cleanedDeck = deckState.filter((dCard)=> {
          if (card.code !== dCard.code) return true})
          setDeckState(cleanedDeck)
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
    <ListItem>{card.stripped_title}
                    <ToggleButtonGroup aria-label="Quantity Buttons" color="secondary" exclusive={true} value={quantity} onChange={handleChange}>
                        <ToggleButton aria-label="1 Button" value={1}>{1}</ToggleButton>
                        <ToggleButton aria-label="2 Button" value={2}>{2}</ToggleButton>
                        <ToggleButton aria-label="3 Button" value={3}>{3}</ToggleButton>
                        </ToggleButtonGroup>
                        <Button onClick={deleteCard}>X</Button></ListItem>
    )
}

export default DeckItem
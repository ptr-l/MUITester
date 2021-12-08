import React from "react";
import { useEffect, useState } from "react";


function DeckValidation ({identitySelection, deckState}) {
    const [deckInfluenceCost, setDeckInfluenceCost] = useState (0)
    let deckFaction = identitySelection.faction_code
    let deckSide = identitySelection.side_code
    let factionFilterFunc = card => {
        if (card.faction_code !== deckFaction) return true
    }
    let deckNonSideCards = deckState.filter((card)=> {return card.side_code !== deckSide})
    useEffect(()=> {
        setDeckInfluenceCost(0)
        let deckNonFactionCards = deckState.filter(factionFilterFunc)
        deckNonFactionCards.map((card)=> {setDeckInfluenceCost(deckInfluenceCost + (card.faction_cost * card.deckAmount))})
      
    }, [deckState, identitySelection])
    

    return (
        <div>
        <h2>Deck errors will go here</h2>
        <h2>deck influence cost: {deckInfluenceCost}</h2>
        <button onClick={console.log(deckNonSideCards)}>Tester</button>
        </div>
    )
}

export default DeckValidation
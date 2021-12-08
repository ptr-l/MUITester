import React from "react";
import { useEffect, useState } from "react";


function DeckValidation ({identitySelection, deckState}) {
    const [deckInfluenceCost, setDeckInfluenceCost] = useState (0)
    const [deckSize, setDeckSize] = useState (0)
    let deckFaction = identitySelection.faction_code
    let deckSide = identitySelection.side_code
    let factionFilterFunc = card => {
        if (card.faction_code !== deckFaction) return true
    }
    let deckNonSideCards = deckState.filter((card)=> {return card.side_code !== deckSide})
    let deckNonFactionCards = deckState.filter(factionFilterFunc)
    

    useEffect(()=> {
        let infCost = 0 
        deckNonFactionCards.map((card)=> {infCost = infCost + (card.faction_cost * card.deckAmount)})
        setDeckInfluenceCost(infCost)
        let deckSz = 0
        deckState.map((card) => {deckSz = deckSz + (1 * card.deckAmount)})
        setDeckSize(deckSz)
    }, [deckState, identitySelection])
    

    return (
        <div>
        <h2>Deck errors will go here</h2>
        <h2>deck influence cost: {deckInfluenceCost}/{identitySelection.influence_limit}</h2>
        <h3>deck size: {deckSize}</h3>
        <button onClick={console.log(deckNonSideCards)}>Tester</button>
        <ul>
            {deckInfluenceCost > identitySelection.influence_limit && <li>You are {deckInfluenceCost - identitySelection.influence_limit} over your influence limit! </li>}
            {deckNonSideCards.length > 0 && <li>You have {deckNonSideCards.length} {deckSide == 'runner' ? 'Crop' : 'Runner'} cards in your deck!</li>}
        </ul>
        </div>
    )
}

export default DeckValidation
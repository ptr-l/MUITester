import React, {useState} from "react";
import { Box } from "@mui/system";
import DeckItem from "./DeckItem";
import { Card } from "@mui/material";

function DeckBuilder ({deckState, setDeckState, identitySelection, setIdentitySelection}) {
    return (
        <div>
            <Card> 
                <p>
                    {identitySelection.stripped_title}
                </p>
                </Card>
            <ul>
                {deckState.map((card=>{
                    return <DeckItem card={card}/>
                }))}
            </ul>
        </div>
    )
}

export default DeckBuilder
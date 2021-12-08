import React from "react";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";

function SimpleDeckList ({deckState}) {
    return (
        <Paper>
            <h3></h3>
            <ul>
                {deckState.deck.map((card)=>{return <li>{card.stripped_title} || x{card.deckAmount}</li>})}
            </ul>
        </Paper>
    )
}

export default SimpleDeckList
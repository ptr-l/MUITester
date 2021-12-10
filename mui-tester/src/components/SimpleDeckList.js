import React from "react";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";

function SimpleDeckList ({deckState}) {
    return (
        <Paper>
            <p>
                {deckState.map((card)=>{return <li>{card.stripped_title} || x{card.deckAmount}</li>})}
            </p>
        </Paper>
    )
}

export default SimpleDeckList
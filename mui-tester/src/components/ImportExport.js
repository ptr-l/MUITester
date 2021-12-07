import React, {useState} from "react";
import { FormControl, Button, Box, TextField, InputLabel } from "@mui/material";

function ImportExport ({deckState, setDeckState}) {
    const [author, setAuthor] = useState ("")
    const [deckTitle, setDeckTitle] = useState ("")
    function submitDeck (e) {
        const deckInfo = {
            CreatedBy: author,
            Title: deckTitle,
        }
        const deckToBeSubmitted = [deckState, deckInfo]
        fetch('http://localhost:3005/decks', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(deckToBeSubmitted),
        })
        e.form.reset()
    }
    return (
        <div>
            <Box>
                <FormControl>
                <InputLabel label='Deck Submit Form'>Deck Submission Form</InputLabel>
                <TextField label='Author' value={author} required={true} onChange={(e)=>{setAuthor(e.target.value)}} /> 
                <TextField label='Deck Title' value={deckTitle} onChange={(e)=>{setDeckTitle(e.target.value)}} required={true} />
                <Button label="Deck Submit Button" onClick={submitDeck}>Submit Deck</Button>
                </FormControl>
            </Box>
            <Box>
                <h1>Decks to Load Go Here</h1>
            </Box>
        </div>
    )
}

export default ImportExport
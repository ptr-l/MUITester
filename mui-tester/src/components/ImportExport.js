import React, {useEffect, useState} from "react";
import { FormControl, Button, ButtonGroup, Select, Box, TextField, InputLabel } from "@mui/material";
import SimpleDeckList from "./SimpleDeckList";

function ImportExport ({deckState, setDeckState, identitySelection, setIdentitySelection}) {
    //Control states for the submission form
    const [author, setAuthor] = useState ("")
    const [deckTitle, setDeckTitle] = useState ("")
    const [decksData, setDecksData] = useState ([])
    const [targetDeck, setTargetDeck] = useState ("")
    //Function to post the deck.

    useEffect(()=> {
        fetch('http://localhost:3005/decks')
        .then((response)=> response.json())
        .then((data)=> {setDecksData(data)})
    },[])
    function submitDeck (e) {
        const deckInfo = {
            CreatedBy: author,
            Title: deckTitle,
            id: decksData.length + 1 
        }
        const deckToBeSubmitted = {
            info: deckInfo,
            identity: identitySelection,
            decklist: deckState
        }
        fetch('http://localhost:3005/decks', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(deckToBeSubmitted),
        })
    }
  

    function changetargetDeck (e) {
        setTargetDeck(e.target.value)
    }
    function deleteDeck (e) {
        let deckId = targetDeck
        fetch(`http://localhost:3005/decks/${targetDeck}`, {
            method: "DELETE",
          })
        setDecksData(decksData.filter((deck)=> {
           if (deck.info.id !== deckId) return true
        }))
    }

    function loadDeck () {
        fetch(`http://localhost:3005/decks/${targetDeck}`)
        .then((response)=> response.json())
        .then((data)=> {setDeckState(data.decklist)})
    }
    return (
        <div>
            <Box>
                <Box>
                    <FormControl>
                        <InputLabel label='Deck Submit Form'>Deck Submission Form</InputLabel>
                            <TextField label='Author' value={author} required={true} onChange={(e)=>{setAuthor(e.target.value)}} /> 
                            <TextField label='Deck Title' value={deckTitle} onChange={(e)=>{setDeckTitle(e.target.value)}} required={true} />
                            <Button label="Deck Submit Button" onClick={submitDeck}>Submit Deck</Button>
                    </FormControl>
                </Box>
            
                <SimpleDeckList deckState={deckState}/>
            </Box>
            <Box>
                <h3>Available Decks to Load</h3>
                 <Select 
                multiple={true}
                native={true}
                onChange={changetargetDeck}
                label="Quick Select"
                inputProps={{id:'select-multiple-native'}}>
                    {decksData.map((deck)=>(
                        <option key={deck.info.id} value={deck.info.id}>
                           Title: {deck.info.Title} || Created By: {deck.info.CreatedBy} || Identity: {deck.identity.stripped_title}
                           </option>
                    ))}
                </Select>
                <Button onClick={loadDeck}>Load Deck</Button>
                <Button onClick={deleteDeck}>Delete Deck</Button>
            </Box>
        </div>
    )
}

export default ImportExport
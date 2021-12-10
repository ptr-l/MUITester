import React, {useState} from "react";
import { Box } from "@mui/system";
import DeckItem from "./DeckItem";
import { FixedSizeList } from "react-window";
import { List, Card, Input, FormControl, Select, InputLabel, Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import DeckValidation from "./DeckValidation"
import AutoSizer from "react-virtualized-auto-sizer";

function DeckBuilder ({deckState, setDeckState, cardData, identitySelection, setIdentitySelection}) {
    //State for the Card Selector 
    const [cardChoice, setCardChoice] = useState ({})
    //Filter States
    const [dbTypeFilterState, setdbTypeFilterState] = useState ('All')
    const [dbFactionFilterState, setdbFactionFilterState] = useState ('All')

    //Function for Mouse Hover on cards

    //Filter Functions
    let sideFilterFunc = card => {
        if (Boolean(identitySelection) === false) return true
        else return card.side_code === identitySelection.side_code
      }
      let factionFilterFunc = card => {
        if (dbFactionFilterState === 'All') return true
        else if (dbFactionFilterState === 'Neutral') return card.faction_code.includes('Neutral')
        else if (dbFactionFilterState === 'Faction') return card.faction_code === identitySelection.faction_code
        else return card.faction_code !== identitySelection.faction_code 
      }
      let typeFilterFunc = card => {
        if (dbTypeFilterState === 'All') return true
        else return card.type_code === dbTypeFilterState
      }
    //Sorting the  decklist
   let sortedDeck=deckState.sort(function (a,b){
        if (a.stripped_title < b.stripped_title) {
          return -1
        }
        if (a.stripped_title > b.stripped_title) {
          return 1
        }
        else return 0})
    //Cards to be displayed based on filter selections
    let cardsToDisplay=cardData
        .filter(sideFilterFunc)
        .filter(factionFilterFunc)
        .filter(typeFilterFunc) 
        .sort(function (a,b){
            if (a.stripped_title < b.stripped_title) {
              return -1
            }
            if (a.stripped_title > b.stripped_title) {
              return 1
            }
            else return 0})
    
    function changeCard (e) {
       let cardCode = e.target.value
       function cardFind (card) {
        return card.code === cardCode
       }
       setCardChoice(cardData.find(cardFind))
    }
    function addToDeck () {
        let newCard = cardChoice
        if (deckState.some(e => e.code === newCard.code)) {alert('This card is already in your deck!'); return} 
        newCard.deckAmount = 1 
        setDeckState([...deckState, newCard])
      }
    return (
        <Box sx={{height: '92%', width: '92%'}}>
            <Card> 
                <p>
                    {identitySelection.stripped_title}
                    
                </p>
                </Card>
            <Box sx={{paddingLeft:'5%', height: '85%', width: '85%'}}>
            <List
            sx={{padding: '5%',
                height: '80%',
                maxHeight: 295,
                width: '45%',
                maxWidth: '45%',
                overflow: 'auto'}}>
                {sortedDeck.map((card=>{
                    return <DeckItem  deckState={deckState} setDeckState={setDeckState} card={card}/>
                }))}
            </List>
            </Box>
            <Box sx={{display: `grid`, gridTemplateColumns:`60% 40%`, gridTemplateAreas: `"main sidebar"`}}>
                <Box sx={{gridArea: `main`}}>
                    <FormControl >
                <InputLabel shrink> Quick Card Add</InputLabel>
                <ToggleButtonGroup
                value={dbTypeFilterState}
                onChange={(e)=>{setdbTypeFilterState(e.target.value)}}>
                    <ToggleButton value='All'>All </ToggleButton>
                    {identitySelection.side_code === "corp" && <ToggleButton value="Agenda">Agenda</ToggleButton>}
                    {identitySelection.side_code === "corp" && <ToggleButton value="Asset">Asset</ToggleButton>}
                    {identitySelection.side_code === "runner" && <ToggleButton value="Event">Event</ToggleButton>}
                    {identitySelection.side_code === "runner" && <ToggleButton value='Hardware'>Hardware</ToggleButton>}
                    {identitySelection.side_code === "corp" && <ToggleButton value='ICE'>ICE</ToggleButton>}
                    {identitySelection.side_code === "corp" && <ToggleButton value='Operation'>Operation</ToggleButton>}
                    {identitySelection.side_code === "runner" && <ToggleButton value='Program'>Program</ToggleButton> }
                    {identitySelection.side_code === "runner" && <ToggleButton value='Resource'>Resource</ToggleButton> }
                    {identitySelection.side_code === "corp" && <ToggleButton value='Upgrade'>Upgrade</ToggleButton>}
                </ToggleButtonGroup>
                <Select 
                multiple={true}
                native={true}
                onChange={changeCard}
                label="Quick Select"
                inputProps={{id:'select-multiple-native'}}>
                    {cardsToDisplay.map((card)=>(
                        <option key={card.code} value={card.code}>
                            {card.stripped_title}
                            </option>
                    ))}
                </Select>
                    <ToggleButtonGroup value={dbFactionFilterState} onChange={(e)=>setdbFactionFilterState(e.target.value)}> 
                        <ToggleButton value='All'>All</ToggleButton>
                        <ToggleButton value='Faction'>In-Faction</ToggleButton> 
                        <ToggleButton value='Neutral'>Neutral</ToggleButton> 
                        <ToggleButton value='OOF'>Out-of-Faction</ToggleButton>
                    </ToggleButtonGroup>
                    <Button onClick={addToDeck}>Add to Deck</Button>
                    </FormControl>
                    </Box>
                <Box sx={{gridArea: `sidebar`}}>
                     <img sx={{width: 100, height: 100}} src={`https://netrunnerdb.com/card_image/large/${cardChoice.code}.jpg`} />
                </Box>
            </Box>
            <Card>
                <DeckValidation deckState={deckState} identitySelection={identitySelection}/>
            </Card>
        </Box>
    )
}

export default DeckBuilder
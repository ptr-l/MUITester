import './App.css';
import reactDom from 'react-dom';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import React, {useState, useEffect} from 'react';
import CardSearch from './components/CardSearch';
import NavPanel from './components/NavPanel';
import DeckBuilder from './components/DeckBuilder';
import ImportExport from './components/ImportExport';


function App() {
  //Two states here - had attempted one but it doesn't work well that way for eventual rules enforcement/identity stuff. One for cards in deck, one for selected Identity.
  const [deckState, setDeckState] = useState([])
  const [identitySelection, setIdentitySelection] = useState([])
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route exact path="/CardSearch" element={<CardSearch setIdentitySelection = {setIdentitySelection} identitySelection = {identitySelection} setDeckState={setDeckState} deckState={deckState} />} />
    <Route exact path="/DeckBuilder" element={  <DeckBuilder setIdentitySelection = {setIdentitySelection} identitySelection = {identitySelection} deckState={deckState} setDeckState={setDeckState}/>} />
    <Route exact path="/ImportExport" element={<ImportExport setIdentitySelection = {setIdentitySelection} identitySelection = {identitySelection} deckState={deckState} setDeckState={setDeckState}  />} />
    </Routes>
    <NavPanel /> 
    </BrowserRouter>
    </div>
  );
  }

export default App;

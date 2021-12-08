import './App.css';
import reactDom from 'react-dom';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import React, {useState, useEffect} from 'react';
import CardSearch from './components/CardSearch';
import NavPanel from './components/NavPanel';
import DeckBuilder from './components/DeckBuilder';
import ImportExport from './components/ImportExport';


function App() {
  const [deckState, setDeckState] = useState([])

  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route exact path="/CardSearch" element={<CardSearch setDeckState={setDeckState} deckState={deckState} />} />
    <Route exact path="/DeckBuilder" element={ <DeckBuilder deckState={deckState} setDeckState={setDeckState}/>} />
    <Route exact path="/ImportExport" element={<ImportExport deckState={deckState} setDeckState={setDeckState}  />} />
    </Routes>
    <NavPanel /> 
    </BrowserRouter>
    </div>
  );
  }

export default App;

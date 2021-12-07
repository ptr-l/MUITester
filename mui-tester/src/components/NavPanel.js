import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import reactDom from "react-dom";
import { useNavigate } from "react-router";


function NavPanel () {
    let navigate = useNavigate();
    function goFar (e) {
        navigate(e.target.value)
    }
    return (
    <ButtonGroup>
        <Button value="/CardSearch" onClick={goFar}> Card Search</Button>
        <Button value="/Deckbuilder" onClick={goFar}>Deckbuilder</Button>
        <Button value="/ImportExport" onClick={goFar}>Deck Import//Export</Button>
    </ButtonGroup>
    )
}

export default NavPanel
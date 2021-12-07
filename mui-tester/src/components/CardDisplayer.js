import React, {useEffect, useState} from "react";
import { Card, CardMedia, CardActions, Table, TableContainer, TableBody, TableCell, TableHead, TableRow, CardContent, Typography } from "@mui/material";


function CardDisplayer ({selectedCard}) {
    const [cardType, setCardType] = useState(true)
    useEffect (()=> {
        if (selectedCard.type_code === 'identity') {
            setCardType(false)
        }
    })
    return (
        <Card sx={{width: 800, height: 1120,  display: 'flex', flexDirection:'column',}}>
            <CardContent sx={{display: 'flex'}}>
                <CardMedia
                sx={{ width: '60%', height: '84' }}
                component="img"
                image={`https://netrunnerdb.com/card_image/large/${selectedCard.code}.jpg`}/>
                <TableContainer sx ={{display: 'flex',align: 'right', width: 'auto'}}>
                    {cardType === true &&
                    <Table>
                        <TableRow>
                            <TableCell>Cardname:</TableCell>
                            <TableCell>{selectedCard.stripped_title}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Type:</TableCell>
                            <TableCell>{selectedCard.type_code}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Subtype:</TableCell>
                            <TableCell>{selectedCard.keywords}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Faction / / Faction-Cost:</TableCell>
                            <TableCell>{selectedCard.faction_code} / / {selectedCard.faction_cost}</TableCell>
                            </TableRow>
                        <TableRow>
                            <TableCell>Cost:</TableCell>
                            <TableCell>{selectedCard.cost}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Gametext:</TableCell>
                            <TableCell>{selectedCard.text}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Artist:</TableCell>
                            <TableCell>{selectedCard.illustrator}</TableCell>
                        </TableRow>
                    </Table> }
                </TableContainer>
            </CardContent>
        </Card>

    )
}

export default CardDisplayer
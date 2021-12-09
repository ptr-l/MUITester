import React, {useEffect, useState} from "react";
import { Card, CardMedia, CardActions, Table, TableContainer, TableBody, TableCell, TableHead, TableRow, CardContent, Typography } from "@mui/material";


function CardDisplayer ({selectedCard, cardType}) {
    //Need to add some conditional rendering here.
    
    return (
        <Card sx={{height: '95%', width: '95%'}}>
            <CardContent sx={{display: `grid`, gridTemplateColumns: `60% 40%`, gridTemplateAreas: `"info image"`, height: `90%`, width: `90%`}}>
                <CardMedia
                sx={{ objectFit: `contain`, gridArea: `image` }}
                component="img"
                image={`https://netrunnerdb.com/card_image/large/${selectedCard.code}.jpg`}/>
                <TableContainer sx ={{gridArea: `info`, align: 'right', width: 'auto'}}>
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
                            <TableCell>Faction</TableCell>
                            <TableCell>{selectedCard.faction_code}</TableCell>
                            </TableRow>
                        <TableRow>
                            <TableCell>Cost:</TableCell>
                            <TableCell>{selectedCard.cost}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Influence Cost:</TableCell>
                            <TableCell>{selectedCard.faction_cost}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Gametext:</TableCell>
                            <TableCell>{selectedCard.text}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Artist:</TableCell>
                            <TableCell>{selectedCard.illustrator}</TableCell>
                        </TableRow>
                    </Table> 
                </TableContainer>
            </CardContent>
        </Card>

    )
}

export default CardDisplayer
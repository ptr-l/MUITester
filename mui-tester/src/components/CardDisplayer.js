import React, {useEffect, useState} from "react";
import { Card, CardMedia, CardActions, Table, TableContainer, TableBody, TableCell, TableHead, TableRow, CardContent, Typography } from "@mui/material";


function CardDisplayer ({selectedCard, cardType}) {
    //Need to add some conditional rendering here.
    
    return (
        <Card sx={{height: '97%', width: '97%'}}>
            <CardContent sx={{display: `grid`, gridTemplateColumns: `60% 40%`, gridTemplateAreas: `"info image"`, height: `95%`, width: `90%`}}>
                <CardMedia
                sx={{ objectFit: `contain`, gridArea: `image` }}
                component="img"
                image={`https://netrunnerdb.com/card_image/large/${selectedCard.code}.jpg`}/>
                <TableContainer sx ={{gridArea: `info`, align: 'right', width: 'auto'}}>
                    <Table>
                        <TableRow>
                            <TableCell sx={{fontSize: 11}}>Cardname:</TableCell>
                            <TableCell sx={{fontSize: 11}}>{selectedCard.stripped_title}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{fontSize: 11}}>Type:</TableCell>
                            <TableCell sx={{fontSize: 11}}>{selectedCard.type_code}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{fontSize: 11}}>Subtype:</TableCell>
                            <TableCell sx={{fontSize: 11}}>{selectedCard.keywords}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{fontSize: 11}}>Faction</TableCell>
                            <TableCell sx={{fontSize: 11}}>{selectedCard.faction_code}</TableCell>
                            </TableRow>
                        <TableRow>
                            <TableCell sx={{fontSize: 11}}>Cost:</TableCell>
                            <TableCell sx={{fontSize: 11}}>{selectedCard.cost}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{fontSize: 11}}>Influence Cost:</TableCell>
                            <TableCell sx={{fontSize: 11}}>{selectedCard.faction_cost}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{fontSize: 11}}>Gametext:</TableCell>
                            <TableCell sx={{fontSize: 11}}>{selectedCard.stripped_text}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{fontSize: 11}}>Artist:</TableCell>
                            <TableCell sx={{fontSize: 11}}>{selectedCard.illustrator}</TableCell>
                        </TableRow>
                    </Table> 
                </TableContainer>
            </CardContent>
        </Card>

    )
}

export default CardDisplayer
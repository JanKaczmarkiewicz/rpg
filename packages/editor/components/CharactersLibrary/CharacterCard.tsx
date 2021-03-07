import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { CharacterCardDetails, CharacterCardProps } from './types';

const CharacterCard = <T extends CharacterCardDetails>({
    onClick,
    characterDetails,
    selected = false,
}: CharacterCardProps<T>) => {
    const { imageUrl, primaryDescription, secondaryDescription } = characterDetails;

    const onActionAreaClick = (): void => {
        onClick(characterDetails);
    };

    return (
        <Card variant={selected ? 'outlined' : 'elevation'}>
            <CardActionArea onClick={onActionAreaClick}>
                <Box p={2}>
                    <CardMedia component="img" src={imageUrl} />
                </Box>

                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {primaryDescription}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {secondaryDescription}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CharacterCard;

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { FunctionComponent } from 'react';
import { CharacterCardProps } from './types';

const CharacterCard: FunctionComponent<CharacterCardProps> = ({ onClick, characterDefinition, selected = false }) => {
    const { imageUrl, primaryDescription, secondaryDescription } = characterDefinition;

    const onActionAreaClick = (): void => {
        onClick(characterDefinition);
    };

    return (
        <Card variant={selected ? 'outlined' : 'elevation'}>
            <CardActionArea onClick={onActionAreaClick}>
                <CardMedia component="img" src={imageUrl} />

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

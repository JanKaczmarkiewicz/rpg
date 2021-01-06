import React, { ReactNode } from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {
    Layers as LayersIcon,
    EmojiPeople as EmojiPeopleIcon,
    ViewQuilt as ViewQuiltIcon,
    SettingsInputSvideo as SettingsInputSvideoIcon,
} from '@material-ui/icons';
import { LocalizeKey, useLocalize } from '../../../localization/useLocalize';
import SectionTitle from '../common/SectionTitle';

const options: { optionTextKey: LocalizeKey; icon: ReactNode }[] = [
    { optionTextKey: 'editLayers', icon: <LayersIcon /> },
    { optionTextKey: 'editWalls', icon: <ViewQuiltIcon /> },
    { optionTextKey: 'editCharacters', icon: <SettingsInputSvideoIcon /> },
    { optionTextKey: 'editNPCs', icon: <EmojiPeopleIcon /> },
];

const MainMenuBlade = () => {
    const localize = useLocalize();
    return (
        <>
            <SectionTitle>{localize('whatYouWantToDo')}</SectionTitle>
            <List>
                {options.map(({ optionTextKey, icon }) => (
                    <ListItem button key={optionTextKey}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={localize(optionTextKey)} />
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default MainMenuBlade;

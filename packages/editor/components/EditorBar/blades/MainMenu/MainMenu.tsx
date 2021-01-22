import React, { FunctionComponent, ReactNode } from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {
    EmojiPeople as EmojiPeopleIcon,
    ViewQuilt as ViewQuiltIcon,
    SettingsInputSvideo as SettingsInputSvideoIcon,
} from '@material-ui/icons';
import { LocalizeKey, useLocalize } from '../../../../localization/useLocalize';
import SectionTitle from '../../common/SectionTitle';
import { EditMode } from '../../../../store/map/types';

const options: { optionTextKey: LocalizeKey; icon: ReactNode; mode: EditMode }[] = [
    { optionTextKey: 'editWalls', icon: <ViewQuiltIcon />, mode: EditMode.Collision },
    { optionTextKey: 'editEnemies', icon: <SettingsInputSvideoIcon />, mode: EditMode.Enemy },
    { optionTextKey: 'editNPCs', icon: <EmojiPeopleIcon />, mode: EditMode.Npc },
];

type MainMenuProps = {
    onMenuItemClick: (mode: EditMode) => void;
};

const MainMenu: FunctionComponent<MainMenuProps> = ({ onMenuItemClick }) => {
    const localize = useLocalize();
    return (
        <>
            <SectionTitle>{localize('whatYouWantToDo')}</SectionTitle>
            <List>
                {options.map(({ optionTextKey, icon, mode }) => (
                    <ListItem button key={optionTextKey} onClick={() => onMenuItemClick(mode)}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={localize(optionTextKey)} />
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default MainMenu;

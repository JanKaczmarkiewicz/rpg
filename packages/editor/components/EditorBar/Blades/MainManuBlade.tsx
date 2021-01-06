import { List, ListItem, ListItemText } from '@material-ui/core';
import { LocalizeKey, useLocalize } from '../../../localization/useLocalize';
import SectionTitle from '../common/SectionTitle';

const options: { optionTextKey: LocalizeKey }[] = [
    { optionTextKey: 'editLayers' },
    { optionTextKey: 'editWalls' },
    { optionTextKey: 'editCharacters' },
    { optionTextKey: 'editNPCs' },
];

const MainMenuBlade = () => {
    const localize = useLocalize();
    return (
        <>
            <SectionTitle>{localize('whatYouWantToDo')}</SectionTitle>
            <List>
                {options.map(({ optionTextKey }) => (
                    <ListItem button key={optionTextKey}>
                        <ListItemText primary={localize(optionTextKey)} />
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default MainMenuBlade;

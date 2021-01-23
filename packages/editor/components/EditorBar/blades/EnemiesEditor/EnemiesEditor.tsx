import React, { FunctionComponent } from 'react';
import SectionTitle from '../../common/SectionTitle';
import { useLocalize } from '../../../../localization/useLocalize';
import CharacterLibrary from '../../../CharactersLibrary/CharactersLibrary';
import { characters } from '../../../CharactersLibrary/mock';
import { CharacterCardDetails } from '../../../CharactersLibrary/types';
import { useDispatch, useSelector } from 'react-redux';
import { setEditorSelectedEnemy } from '../../../../store/map/actions/setEditorSelectedEnemy';
import { selectEditorEnemyData } from '../../../../store/map/selectors';
import { Enemy } from '../../../../store/map/types';

const getEnemyCardDetails = ({ id, imageUrl, level, name }: Enemy): CharacterCardDetails => ({
    id,
    imageUrl,
    primaryDescription: name,
    secondaryDescription: `level: ${level}`,
});

const EnemiesEditor: FunctionComponent = () => {
    const localize = useLocalize();
    const dispatch = useDispatch();
    const editorEnemyData = useSelector(selectEditorEnemyData);

    const onSelectCharacter = (enemy: Enemy) => {
        console.log(enemy);
        dispatch(setEditorSelectedEnemy({ enemy }));
    };

    const selectedEnemyId = editorEnemyData.selected?.id;

    return (
        <>
            <SectionTitle>{localize('editEnemies')}</SectionTitle>
            <CharacterLibrary
                characters={characters}
                onSelect={onSelectCharacter}
                selectedCharacterId={selectedEnemyId}
                getCharacterCardDetails={getEnemyCardDetails}
            />
        </>
    );
};

export default EnemiesEditor;

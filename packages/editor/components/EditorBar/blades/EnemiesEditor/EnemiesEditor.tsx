import React, { FunctionComponent } from 'react';
import SectionTitle from '../../common/SectionTitle';
import { useLocalize } from '../../../../localization/useLocalize';
import CharacterLibrary from '../../../CharactersLibrary/CharactersLibrary';
import { characters } from '../../../CharactersLibrary/mock';
import { CharacterLibraryProps } from '../../../CharactersLibrary/types';
import { useDispatch, useSelector } from 'react-redux';
import { setEditorSelectedEnemy } from '../../../../store/map/actions/setEditorSelectedEnemy';
import { selectEditorEnemyData } from '../../../../store/map/selectors';

const EnemiesEditor: FunctionComponent = () => {
    const localize = useLocalize();
    const dispatch = useDispatch();
    const editorEnemyData = useSelector(selectEditorEnemyData);

    const onSelectCharacter: CharacterLibraryProps['onSelect'] = (characterDefinition) => {
        dispatch(setEditorSelectedEnemy({ character: characterDefinition }));
    };

    const selectedEnemyId = editorEnemyData.selected?.id;

    return (
        <>
            <SectionTitle>{localize('editEnemies')}</SectionTitle>
            <CharacterLibrary
                characters={characters}
                onSelect={onSelectCharacter}
                selectedCharacterId={selectedEnemyId}
            />
        </>
    );
};

export default EnemiesEditor;

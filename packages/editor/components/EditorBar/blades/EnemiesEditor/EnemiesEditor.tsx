import React, { FunctionComponent } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { EnemyObjectResponse } from '@rpg/backend/src/routes/enemies/shared/types';
import SectionTitle from '../../common/SectionTitle';
import CharacterLibrary from '../../../CharactersLibrary/CharactersLibrary';
import { CharacterCardDetails } from '../../../CharactersLibrary/types';
import { setEditorSelectedEnemy } from '../../../../store/map/actions/setEditorSelectedEnemy';
import { selectEditorEnemyData } from '../../../../store/map/selectors';
import client from '../../../../apiClient/client';
import localize from '../../../../localization/localize';

const getEnemyCardDetails = ({ id, imageUrl, level, name }: EnemyObjectResponse): CharacterCardDetails => ({
    id,
    imageUrl,
    primaryDescription: name,
    secondaryDescription: `level: ${level}`,
});

const EnemiesEditor: FunctionComponent = () => {
    const dispatch = useDispatch();
    const editorEnemyData = useSelector(selectEditorEnemyData);
    const { data = [] } = useQuery('enemies', client.enemy.getMany);

    const onSelectCharacter = (enemy: EnemyObjectResponse) => {
        dispatch(setEditorSelectedEnemy({ enemy }));
    };

    const selectedEnemyId = editorEnemyData.selected?.id;

    return (
        <>
            <SectionTitle>{localize('editEnemies')}</SectionTitle>
            <CharacterLibrary
                characters={data}
                onSelect={onSelectCharacter}
                selectedCharacterId={selectedEnemyId}
                getCharacterCardDetails={getEnemyCardDetails}
            />
        </>
    );
};

export default EnemiesEditor;

import React, { FunctionComponent } from 'react';
import SectionTitle from '../../common/SectionTitle';
import { useLocalize } from '../../../../localization/useLocalize';

const EnemiesEditor: FunctionComponent = () => {
    const localize = useLocalize();

    return (
        <>
            <SectionTitle>{localize('editEnemies')}</SectionTitle>
        </>
    );
};

export default EnemiesEditor;

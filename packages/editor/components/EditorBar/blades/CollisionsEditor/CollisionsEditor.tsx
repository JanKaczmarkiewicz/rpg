import React, { FunctionComponent } from 'react';
import SectionTitle from '../../common/SectionTitle';
import { useLocalize } from '../../../../localization/useLocalize';

const CollisionEditor: FunctionComponent = () => {
    const localize = useLocalize();

    return (
        <>
            <SectionTitle>{localize('editWalls')}</SectionTitle>
        </>
    );
};

export default CollisionEditor;

import React, { FunctionComponent } from 'react';
import localize from '../../../../localization/localize';
import SectionTitle from '../../common/SectionTitle';

const CollisionEditor: FunctionComponent = () => {
    return (
        <>
            <SectionTitle>{localize('editWalls')}</SectionTitle>
        </>
    );
};

export default CollisionEditor;

import React, { FunctionComponent } from 'react';
import localize from '../../../../localization/localize';
import SectionTitle from '../../common/SectionTitle';

const NpcsEditor: FunctionComponent = () => {
    return (
        <>
            <SectionTitle>{localize('editNPCs')}</SectionTitle>
        </>
    );
};

export default NpcsEditor;

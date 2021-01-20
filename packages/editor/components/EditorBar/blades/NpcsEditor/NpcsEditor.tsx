import React, { FunctionComponent } from 'react';
import SectionTitle from '../../common/SectionTitle';
import { useLocalize } from '../../../../localization/useLocalize';

const NpcsEditor: FunctionComponent = () => {
    const localize = useLocalize();

    return (
        <>
            <SectionTitle>{localize('editNPCs')}</SectionTitle>
        </>
    );
};

export default NpcsEditor;

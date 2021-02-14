import React, { FunctionComponent, useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { Box, Button, TextField } from '@material-ui/core';
import { HttpMethod } from '@rpg/backend/src/constants/constants';
import { MapObjectResponse } from '@rpg/backend/src/routes/maps/shered/types';
import { client } from '../../apiClient/client';
import { useLocalize } from '../../localization/useLocalize';
import Modal from '../atom/Modal';
import MapPreviewField from '../MapPreviewField/MapPreviewField';

const initialValues = {
    name: '',
    backgroundUrl: '',
    tiles: [],
};

const AddMapButton: FunctionComponent = () => {
    const localize = useLocalize();
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const { resetForm, submitForm, values, handleChange } = useFormik({
        initialValues,
        onSubmit: async (values) => {
            const result = await client<MapObjectResponse>({ method: HttpMethod.Post, url: `/maps`, body: values });
            router.push(`/maps/${result.id}`);
        },
    });

    const onModalClose = () => {
        resetForm();
        setIsOpen(false);
    };

    const onModalOpen = () => setIsOpen(true);

    return (
        <>
            <Modal
                open={isOpen}
                onClose={onModalClose}
                actions={
                    <>
                        <Button onClick={onModalClose}>{localize('close')}</Button>
                        <Button onClick={submitForm}>{localize('create')}</Button>
                    </>
                }
            >
                <Box mb={2}>
                    <TextField
                        fullWidth
                        name="name"
                        label={localize('name')}
                        value={values.name}
                        onChange={handleChange}
                    />
                </Box>

                <TextField
                    fullWidth
                    name="backgroundUrl"
                    label={localize('mapBackgroundUrl')}
                    value={values.backgroundUrl}
                    onChange={handleChange}
                />

                <MapPreviewField name="tiles" url={values.backgroundUrl} onChange={handleChange} />
            </Modal>

            <Button onClick={onModalOpen}>{localize('addMap')}</Button>
        </>
    );
};

export default AddMapButton;

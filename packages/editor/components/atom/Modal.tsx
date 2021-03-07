import { makeStyles, ModalProps as MuiModalProps, Paper, Modal as MuiModal } from '@material-ui/core';
import { FunctionComponent, ReactNode } from 'react';

const usePaperStyles = makeStyles((theme) => ({
    root: { width: '400px', margin: '0 auto', padding: theme.spacing(3), outline: 'none' },
}));

const useActionsWrapperStyles = makeStyles((theme) => ({
    root: { display: 'flex', justifyContent: 'flex-end', gap: theme.spacing(1), padding: theme.spacing(1) },
}));

type ModalProps = Omit<MuiModalProps, 'children'> & { actions?: ReactNode; children: ReactNode };

const Modal: FunctionComponent<ModalProps> = ({ children, actions, ...props }) => {
    const paperClasses = usePaperStyles();
    const actionsWrapperClasses = useActionsWrapperStyles();

    return (
        <MuiModal {...props}>
            <Paper classes={paperClasses}>
                {children}

                {actions ? <div className={actionsWrapperClasses.root}>{actions}</div> : null}
            </Paper>
        </MuiModal>
    );
};

export default Modal;

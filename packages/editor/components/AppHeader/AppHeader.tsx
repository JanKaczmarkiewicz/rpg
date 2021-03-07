import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { FunctionComponent, ReactNode } from 'react';

type AppHeaderProps = {
    text: string;
    actions?: ReactNode;
};

const useActionsContainerStyles = makeStyles((theme) => ({
    root: { gap: theme.spacing(2), display: 'flex' },
}));

const useToolbarStyles = makeStyles({
    root: { display: 'flex', justifyContent: 'space-between' },
});

const AppHeader: FunctionComponent<AppHeaderProps> = ({ text, actions }) => {
    const actionsContainerClasses = useActionsContainerStyles();
    const toolbarClasses = useToolbarStyles();

    console.log(actions);
    return (
        <>
            <AppBar position="fixed">
                <Toolbar classes={toolbarClasses}>
                    <Typography variant="h6">{text}</Typography>
                    <div className={actionsContainerClasses.root}>{actions}</div>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    );
};

export default AppHeader;

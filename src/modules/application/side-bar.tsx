import React from 'react';
import { Box, IconButton } from '@material-ui/core';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';

import { Shadow, Layout } from '../../styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        sidebar: {
            position: 'fixed',
            zIndex: 9999,
            width: 64,
            height: '100vh',
            background: '#ffffff',

            display: 'flex',
            flexDirection: 'column',

            padding: '16px',

            ...Shadow.DEFAULT_BOX,
        },
        content: {
            ...Layout.FLEX.DEFAULT_CENTER,

            flex: 1,
        },

        menu: {
            ...Layout.FLEX.DEFAULT_CENTER,

            height: 32,
        }
    }),
);

export const SideBar: React.FunctionComponent<{}> = () => {
    const classes = useStyles();

    return (
        <Box component="div" className={classes.sidebar}>
            <Box component="div" className={classes.content}>

            </Box>

            <Box component="div" className={classes.menu}>
                <IconButton aria-label="menu" size="small" onMouseDown={(event) => {
                    event.stopPropagation();
                }}>
                    <MenuIcon fontSize="inherit" />
                </IconButton>
            </Box>
        </Box>
    )
}
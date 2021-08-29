import React from 'react';
import { Box } from '@material-ui/core';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import { IconButton } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        menu: {
            position: 'fixed',
            right: '1em',
            bottom: '5em',
        },
        button: {
            boxShadow: '0px 2px 1px -1px rgb(0, 0, 0, 0.2), 0px 1px 1px 0px rgb(0, 0, 0, 0.14), 0px 1px 3px 0px rgb(0, 0, 0, 0.12)',

            borderRadius: '50%',
        }
    }),
);

export const Menu: React.FunctionComponent<{}> = () => {
    const classes = useStyles();

    return (
        <Box component="div" className={classes.menu}>
            <Box component="div" className={classes.button}>
                <IconButton aria-label="create">
                    <AddIcon />
                </IconButton>
            </Box>
        </Box>
    )
}
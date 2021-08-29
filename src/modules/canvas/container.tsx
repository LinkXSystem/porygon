import React from 'react';
import { Box } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import { Background } from '../../styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            position: 'relative',
        },
        background: {
            ...Background.PATTERN.POLKA,

            position: 'absolute',
            zIndex: -1,

            width: '100vw',
            height: '100vh',
        },
        canvas: {
            width: '100vw',
            height: '100vh',
            transform: 'translate(50%, 50%)',
        }
    }),
);

interface CanvasContainerProps {
    children: React.ReactChild | React.ReactChild[]
}

export const CanvasContainer: React.FunctionComponent<CanvasContainerProps> = ({ children }) => {
    const classes = useStyles();

    return (
        <Box component="div" className={classes.container}>
            <Box component="div" className={classes.background} />
            <Box component="div" className={classes.canvas}>
                {children}
            </Box>
        </Box>
    )
}
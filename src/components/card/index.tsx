import React from 'react';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import { Typography, Box, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            boxShadow: '0px 2px 1px -1px rgb(0, 0, 0, 0.2), 0px 1px 1px 0px rgb(0, 0, 0, 0.14), 0px 1px 3px 0px rgb(0, 0, 0, 0.12)',

            width: 360,
            borderRadius: 4,
            
            background: '#ffffff'
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 16px',
            fontSize: 16,
            letterSpacing: 1
        },
        content: {
            position: 'relative',
            padding: '8px 16px 16px',
        },
        editor: {
            display: 'block',
            width: '100%',
            padding: '8px 8px',
            outline: 'none',
            resize: 'none',
            border: '1px solid #cccbcb',
            borderRadius: 4
        }
    }),
);

export const Card: React.FunctionComponent<{}> = () => {
    const classes = useStyles();
    return (
        <div className={classes.card}>
            <Box component="div" className={classes.header}>
                <Typography style={{
                    userSelect: 'none'
                }}>
                    笔记应用
                </Typography>
                <IconButton aria-label="menu" size="small" onMouseDown={(event) => {
                    event.stopPropagation();
                }}>
                    <MenuIcon fontSize="inherit" />
                </IconButton>
            </Box>
            <Box component="div" className={classes.content}>
                <textarea className={classes.editor} rows={7} onMouseDown={(event) => {
                    event.stopPropagation();
                }} />
                <Box component="div" style={{
                    position: 'absolute',
                    top: '-2px',
                    right: 0,
                    transform: 'translate(50%)',

                    display: 'flex',
                    alignItems: 'center',

                    userSelect: 'none',

                    background: '#e0e0e0',
                    color: '#ffffff',
                    borderRadius: '16px',

                    padding: '2px 12px 2px 12px',

                    boxShadow: '0px 2px 1px -1px rgb(0, 0, 0, 0.2)',
                }}>
                    <span style={{
                        fontSize: 12,
                    }}>
                        卡片
                    </span>
                </Box>
            </Box>
        </div>
    );
}
import React, { useState } from 'react';

import {
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField
} from '@material-ui/core';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';


import { Animation, Card, Dragger } from '../../components';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        dialog: {
            width: 540
        }
    }),
);

export const NoteCardCreateDialog: React.FunctionComponent<{}> = () => {
    const classes = useStyles();

    const [visible, setVisible] = useState<boolean>(false);

    const handleClose = () => {
        setVisible(false);
    }

    return (
        <Box component="div">
            <Button onClick={() => { setVisible(true) }} color="primary">
                创建
            </Button>
            <Dialog

                TransitionComponent={Animation.SlideTransition}
                open={visible}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">卡片创建</DialogTitle>
                <DialogContent className={classes.dialog}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="卡片名称"
                        type="text"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="标签"
                        type="text"
                        variant="outlined"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        取消
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        创建
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

interface NoteCardProps { }

export const NoteCard: React.FunctionComponent<NoteCardProps> = () => {
    return (
        <Dragger>
            <Card />
        </Dragger>
    )
}
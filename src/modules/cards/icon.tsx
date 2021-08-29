import React from 'react';

import { Box } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import AllInclusiveIcon from '@material-ui/icons/AllInclusive';

import { Shadow } from '../../styles';

import { Dragger } from '../../components';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            height: 50,
            borderRadius: 4,

            background: '#ffffff',

            ...Shadow.DEFAULT_BOX
        }
    }),
);

export interface IconCardProps {
    icon?: React.ReactChild
}

export const IconCard: React.FunctionComponent<IconCardProps> = ({ icon }) => {
    const classes = useStyles();

    return (
        <Dragger>
            <Box component="div" className={classes.icon}>
                {icon ? icon : <AllInclusiveIcon />}
            </Box>
        </Dragger>
    )
}

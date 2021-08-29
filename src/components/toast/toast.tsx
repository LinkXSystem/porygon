import React, { useState, useEffect } from 'react';

import { useSpring, animated } from 'react-spring';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import { Shadow  } from '../../styles';

interface ToastProps {
    message: string,
    duration: number,
    onCloseCallback: Function
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toast: {
            position: 'fixed',
            bottom: '40px',
            left: '50%',
            transform: 'translate(-50%)',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            width: '686px',
            height: '64px',

            background: 'rgba(255, 255, 255, 0.8)',
            color: '#595959',
            fontWeight: 'bold',

            borderRadius: '32px',

            ...Shadow.DEFAULT_BOX,
        }
    }),
);

const Toast: React.FC<ToastProps> = ({ message, duration, onCloseCallback }) => {
    const classes = useStyles();

    const [visible, setVisible] = useState(false);

    const { opacity } = useSpring({
        opacity: visible ? 0 : 1, config: {
            duration: 250
        },
        onRest: () => {
            if (!visible) {
                onCloseCallback();
            }
        }
    });

    useEffect(() => {
        setVisible(true);

        setTimeout(() => { setVisible(false); }, duration);
    }, [duration]);

    return (
        <animated.div className={classes.toast} style={
            { opacity: opacity.interpolate((o: any) => (1 - o)) }
        }>
            <span>{message}</span>
        </animated.div>
    );
}

export default Toast;


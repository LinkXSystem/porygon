import React from 'react';
import ReactDOM from 'react-dom';

import InlineToast from './toast';

export class Toast {
    static info({
        message,
        duration,
        onCloseCallback
    }: {
        message: string,
        duration?: number
        onCloseCallback?: Function
    }) {
        const container = document.createElement('div');
        const root = document.getElementById('root') || document.body;

        root.appendChild(container);

        const destroy = () => {
            ReactDOM.unmountComponentAtNode(container);
            root.removeChild(container);

            onCloseCallback && onCloseCallback();
        }

        const component = (
            <InlineToast message={message} duration={duration || 1000} onCloseCallback={destroy} />
        );

        ReactDOM.render(component, container);

        return {
            destroy
        }
    }
}

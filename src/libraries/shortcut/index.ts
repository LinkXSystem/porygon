import { KEYDOWN } from '../../constants/events';

import { PREFIX_CODE } from './constants';

export class Shortcut {
    _shortcut: Map<string, Function>;

    constructor() {
        this._shortcut = new Map();

        this._handleListen = this._handleListen.bind(this);
    }

    initial() {
        window.addEventListener(KEYDOWN,    this._handleListen);
    }

    destroy() {
        window.removeEventListener(KEYDOWN, this._handleListen);
    }

    _handleListen(event: KeyboardEvent) {
        event.preventDefault();
        event.stopPropagation();

        const { ctrlKey, shiftKey, metaKey, altKey } = event;

        let shortcut = [];

        if (shiftKey) {
            shortcut.push(PREFIX_CODE.SHIFT);
        }

        if (altKey) {
            shortcut.push(PREFIX_CODE.ALT);
        }

        if (ctrlKey) {
            shortcut.push(PREFIX_CODE.CTRL);
        }

        if (metaKey) {
            shortcut.push(PREFIX_CODE.META);
        }

        const { key } = event;

        shortcut.push(key.toUpperCase());

        const _key = window.btoa(shortcut.join(' '));

        const fn = this._shortcut.get(_key);

        if (fn) {
            fn(event);
        }
    }

    setShortcut(keys: string[], callback: Function) {
        const _key = window.btoa(keys.join(' '));
        this._shortcut.set(_key, callback);
    }

    delShortcut(keys: string[]) {
        const _key = window.btoa(keys.join(' '));
        this._shortcut.delete(_key);
    }
}

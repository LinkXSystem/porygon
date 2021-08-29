import { v4 } from 'uuid';

import { CardInterface } from '../interfaces';

import { Matrix3D } from '../libraries/matrix';

export class Card implements CardInterface {
    uuid: string;
    type?: string;

    name: string;

    matrix: Matrix3D;

    created: number;
    updated: number;

    constructor(name: string) {
        this.uuid = v4();
        this.created = Date.now();
        this.updated = Date.now();

        this.name = name;
        this.matrix = new Matrix3D();
    }

    setType(type: string) {
        this.type = type;
    }

    setMatrix(matrix: Matrix3D) {
        this.matrix = matrix;
    }

    toSerialize() { }
}
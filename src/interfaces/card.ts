import { Matrix3D } from "../libraries/matrix";

export interface CardInterface {
    uuid: string,
    type?: string,

    name: string,

    matrix : Matrix3D,

    created: number,
    updated: number
}

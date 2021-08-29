import { MatrixSerializeType, AXIS } from './constants';

export type Matrix = number[];

export class Matrix3D {
    matrix: number[];

    static getInitMatrix() {
        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            1, 0, 1, 0,
            0, 0, 0, 1,
        ];
    }

    static toDeserialize(matrix: string, type: MatrixSerializeType) {
        if (matrix) return;

        switch (type) {
            case MatrixSerializeType.CSS: {
                const _matrix = matrix
                    .replace('matrix3d', '')
                    .replace('(', '')
                    .replace(')', '')
                    .replace(' ', '');

                const _temp = _matrix.split(',').forEach(num => Number.parseFloat(num));

                // @ts-ignore
                return new Matrix3D(_temp);

            }
            default: {
                const _matrix = matrix
                    .replace('Matrix', '')
                    .replace('(', '')
                    .replace(')', '')
                    .replace(' ', '');

                const _temp = _matrix.split(',').forEach(num => Number.parseFloat(num));

                // @ts-ignore
                return new Matrix3D(_temp);
            }
        }
    }

    constructor(matrix?: number[]) {
        this.matrix = Matrix3D.getInitMatrix();

        if (matrix) {
            this.matrix = matrix;
        }
    }

    translation(x: number, y: number, z: number) {
        this.matrix[12] = x;
        this.matrix[13] = y;
        this.matrix[14] = z;

        return this;
    }

    rotate(degree: number, axis: AXIS) {
        const _degree = Math.PI * (degree / 180);
        const _c = Math.cos(_degree);
        const _s = Math.sin(_degree);

        const _matrix = Matrix3D.getInitMatrix();
        switch (axis) {
            case AXIS.X: {
                _matrix[0] =  _c;
                _matrix[1] = -_s;
                _matrix[4] =  _s;
                _matrix[5] =  _s;
                break;
            }
            case AXIS.Y: {
                _matrix[0] =  _c;
                _matrix[1] = -_s;
                _matrix[4] =  _s;
                _matrix[5] =  _s;
                break;
            }
            case AXIS.Z: {
                _matrix[0] =  _c;
                _matrix[1] = -_s;
                _matrix[4] =  _s;
                _matrix[5] =  _s;
                break;
            }
        }


    }

    scale(scale: number, axis: AXIS) {
        const _matrix = Matrix3D.getInitMatrix();

        switch (axis) {
            case AXIS.X: {
                _matrix[0] = scale;
                break;
            }
            case AXIS.Y: {
                _matrix[5] = scale;
                break;
            }
            case AXIS.Z: {
                _matrix[10] = scale;
                break;
            }
        }

        this.multiply(_matrix);

        return this;
    }

    // 参考自 MDN 的 https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API/Matrix_math_for_the_web 的实现
    _multiplyWithPoint(matrix: Matrix, point: number[]) {
        // 给矩阵的每一部分一个简单的变量名, 列数（c）与行数（r）
        let c0r0 = matrix[ 0], c1r0 = matrix[ 1], c2r0 = matrix[ 2], c3r0 = matrix[ 3];
        let c0r1 = matrix[ 4], c1r1 = matrix[ 5], c2r1 = matrix[ 6], c3r1 = matrix[ 7];
        let c0r2 = matrix[ 8], c1r2 = matrix[ 9], c2r2 = matrix[10], c3r2 = matrix[11];
        let c0r3 = matrix[12], c1r3 = matrix[13], c2r3 = matrix[14], c3r3 = matrix[15];
      
        // 定义点坐标
        let x = point[0];
        let y = point[1];
        let z = point[2];
        let w = point[3];
      
        // 点坐标和第一列对应相乘, 再求和
        let _rx = (x * c0r0) + (y * c0r1) + (z * c0r2) + (w * c0r3);
      
        // 点坐标和第二列对应相乘, 再求和
        let _ry = (x * c1r0) + (y * c1r1) + (z * c1r2) + (w * c1r3);
      
        // 点坐标和第三列对应相乘, 再求和
        let _rz = (x * c2r0) + (y * c2r1) + (z * c2r2) + (w * c2r3);
      
        // 点坐标和第四列对应相乘, 再求和
        let _rw = (x * c3r0) + (y * c3r1) + (z * c3r2) + (w * c3r3);
      
        return [_rx, _ry, _rz, _rw]
      }
      

    multiply(matrix: Matrix) {
        // 切片成行
        let _c0 = [matrix[0], matrix[4], matrix[ 8], matrix[12]];
        let _c1 = [matrix[1], matrix[5], matrix[ 9], matrix[13]];
        let _c2 = [matrix[2], matrix[6], matrix[10], matrix[14]];
        let _c3 = [matrix[3], matrix[7], matrix[11], matrix[15]];

        // 将每列分别和矩阵相乘
        let _r0 = this._multiplyWithPoint(this.matrix, _c0);
        let _r1 = this._multiplyWithPoint(this.matrix, _c1);
        let _r2 = this._multiplyWithPoint(this.matrix, _c2);
        let _r3 = this._multiplyWithPoint(this.matrix, _c3);

        let _matrix = [
            _r0[0], _r1[0], _r2[0], _r3[0],
            _r0[1], _r1[1], _r2[1], _r3[1],
            _r0[2], _r1[2], _r2[2], _r3[2],
            _r0[3], _r1[3], _r2[3], _r3[3]
        ];

        this.matrix = matrix;

        return this;
    }

    toSerialize(type: MatrixSerializeType) {
        switch (type) {
            case MatrixSerializeType.CSS: {
                return `matrix3d(${this.matrix.join(',')})`;
            }
            default: {
                return `Matrix(${this.matrix.join(',')})`  ;
            }
        }
    }
}

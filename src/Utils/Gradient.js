import { toBgString, toStopBarBgString, toCSSBgString } from './colorUtils';

class Gradient {
    constructor(stack, isLinear, degrees, center, name) {
        this.stack = stack; // array of Color objects
        this.isLinear = isLinear; // false = radial
        this.degrees = degrees; // if linear
        this.center = center;
        this.name = name;
    }

    toBgString = () => {
        return toBgString(this);
    };

    toStopBarBgString = () => {
        return toStopBarBgString(this);
    };

    toCSSBgString = () => {
        return toCSSBgString(this);
    };

    clone = () => {
        return new Gradient(
            this.stack.map((color) => color.clone()),
            this.isLinear,
            this.degrees,
            this.center,
            ''
        );
    };
}

export { Gradient };

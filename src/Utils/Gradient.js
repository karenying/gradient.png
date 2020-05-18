import {
    generateBgString,
    generateStopsBgString,
    generateBgDisplayString,
} from './colorUtils';

class Gradient {
    constructor(stack, linear, degrees, name) {
        this.stack = stack; // array of Color objects
        this.linear = linear; // false = radial
        this.degrees = degrees; // if linear
        this.name = name;
    }

    generateBgString = function () {
        return generateBgString(this);
    };

    generateStopsBgString = function () {
        return generateStopsBgString(this);
    };

    generateBgDisplayString = function () {
        return generateBgDisplayString(this);
    };
    copy = function () {};
}

export { Gradient };

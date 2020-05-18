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

    generateBgString = () => {
        return generateBgString(this);
    };

    generateStopsBgString = () => {
        return generateStopsBgString(this);
    };

    generateBgDisplayString = () => {
        return generateBgDisplayString(this);
    };
    copy = () => {};
}

export { Gradient };

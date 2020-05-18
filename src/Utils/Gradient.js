import { generateBackgroundString } from './colorUtils';

class Gradient {
    constructor(stack, linear, degrees, name) {
        this.stack = stack; // array of Color objects
        this.linear = linear; // false = radial
        this.degrees = degrees; // if linear
        this.name = name;
    }

    generateBackgroundString = function () {
        return generateBackgroundString(this);
    };
}

export { Gradient };

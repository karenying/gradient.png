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
        console.log(this.stack);
        return generateBgDisplayString(this);
    };

    clone = () => {
        return new Gradient(
            this.stack.map((color) => color.clone()),
            this.linear,
            this.degrees,
            ''
        );
    };
}

export { Gradient };

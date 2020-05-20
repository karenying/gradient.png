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

    sortStack = () => {
        const { stack } = this;
        stack.sort((a, b) => (a.stop > b.stop ? 1 : -1));
        let selected;
        for (let i = 0; i < stack.length; i++) {
            const color = stack[i];
            color.order = i;
            if (color.selected) {
                selected = i;
            }
        }
        return selected;
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

import { hexToRGB } from './colorUtils';

class Color {
    constructor(hex, stop, selected, index) {
        this.hex = hex;
        this.stop = stop;
        this.selected = selected;
        this.index = index;
    }

    getRGB = function () {
        return {
            r: hexToRGB(this.hex, 'r'),
            g: hexToRGB(this.hex, 'g'),
            b: hexToRGB(this.hex, 'b'),
        };
    };
}

export { Color };

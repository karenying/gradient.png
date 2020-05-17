import { hexToRGB } from '../../Utils/colorUtils';

class Color {
    constructor(hex, stop) {
        this.hex = hex;
        this.stop = stop;
    }

    getRGB = function () {
        return {
            r: hexToRGB(this.hex, 'r'),
            g: hexToRGB(this.hex, 'g'),
            b: hexToRGB(this.hex, 'b'),
        };
    };
}

import { hexToRGB, isDark, getColorwheel } from './colorUtils';

class Color {
    constructor(hex, stop, selected, index) {
        this.hex = hex;
        this.stop = stop;
        this.selected = selected;
        this.index = index;
    }

    getRGB = (primary) => {
        return hexToRGB(this.hex, primary);
    };

    isDark = () => {
        return isDark(this.hex);
    };

    getColorwheel = () => {
        return getColorwheel(this.hex);
    };

    clone = () => {
        return new Color(this.hex, this.stop, this.selected, this.index);
    };
}

export { Color };

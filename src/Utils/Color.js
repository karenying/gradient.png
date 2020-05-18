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
}

export { Color };

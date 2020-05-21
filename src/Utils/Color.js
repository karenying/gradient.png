import { hexToRGB, isDark, getColorwheel } from './colorUtils';

class Color {
    constructor(hex, stop, selected, index) {
        this.hex = hex; // 6 char String hex representation of a color
        this.stop = stop; // Number 0 - 100
        this.selected = selected; // true if selected
        this.index = index; // current place in the stack
    }

    getRGB = (primary) => {
        return hexToRGB(this.hex, primary);
    };

    isDark = () => {
        return isDark(this.hex); // return if the color is dark
    };

    getColorwheel = () => {
        return getColorwheel(this.hex);
    };

    isEqual = (color) => {
        const { hex } = this;
        return color.hex === hex;
    };

    clone = () => {
        return new Color(this.hex, this.stop, this.selected, this.index);
    };
}

export { Color };

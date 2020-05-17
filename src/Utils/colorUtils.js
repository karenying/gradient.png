function hexToRGB(hex, primary) {
    let s;
    switch (primary) {
        case 'r':
            s = hex.substring(0, 2);
            break;
        case 'g':
            s = hex.substring(2, 4);
            break;
        case 'b':
            s = hex.substring(4, 6);
            break;
        default:
            console.log('Not valid primary.');
    }
    return parseInt(s, 16);
}

function getLuminanceFromHex(hex) {
    const r = hexToRGB(hex, 'r'),
        g = hexToRGB(hex, 'g'),
        b = hexToRGB(hex, 'b');
    const rgb = [r, g, b];

    for (let i = 0; i < rgb.length; i++) {
        let c = rgb[i];
        c /= 255;

        if (c > 0.03928) {
            let c1 = Math.pow((c + 0.055) / 1.055, 2.4);
            c = c1;
        } else {
            c /= 12.92;
        }

        rgb[i] = c;
    }

    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}

function isDark(hex) {
    let L = getLuminanceFromHex(hex);
    return L <= 0.5;
}

export { hexToRGB, isDark };

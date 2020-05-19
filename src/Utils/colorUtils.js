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

function generateBgString(gradient) {
    const { stack, linear, degrees } = gradient;
    let background = linear
        ? 'linear-gradient(' + degrees + 'deg, '
        : 'radial-gradient(circle, ';

    let colorString = [];
    for (let i = 0; i < stack.length; i++) {
        colorString.push('#' + stack[i].hex + ' ' + stack[i].stop + '%');
    }

    background += colorString.join(', ') + ')';

    return background;
}

function generateStopsBgString(gradient) {
    const { stack, linear } = gradient;
    let background = linear
        ? 'linear-gradient(90deg, '
        : 'radial-gradient(circle, ';

    let colorString = [];
    for (let i = 0; i < stack.length; i++) {
        colorString.push('#' + stack[i].hex + ' ' + stack[i].stop + '%');
    }

    background += colorString.join(', ') + ')';

    return background;
}

function generateBgDisplayString(gradient) {
    const { stack, linear, degrees } = gradient;
    let background = 'background: ';
    background += linear
        ? 'linear-gradient(\n    ' + degrees + 'deg,\n    '
        : 'radial-gradient(\n    circle,\n';

    let colorString = [];
    for (let i = 0; i < stack.length; i++) {
        colorString.push('#' + stack[i].hex + ' ' + stack[i].stop + '%');
    }

    background += colorString.join(',\n    ') + '\n);';

    return background;
}

function hexToRgb(hex) {
    return {
        r: hexToRGB(hex, 'r'),
        g: hexToRGB(hex, 'g'),
        b: hexToRGB(hex, 'b'),
    };
}

function getHue(rgb) {
    // Make r, g, and b fractions of 1
    let { r, g, b } = rgb;
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0;

    if (delta === 0) h = 0;
    // Red is max
    else if (cmax === r) h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax === g) h = (b - r) / delta + 2;
    // Blue is max
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0) h += 360;

    return h;
}

//
function hslToHex(hsl) {
    let { h, s, l } = hsl;

    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
    } else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
    } else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
    } else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
    } else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
    } else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    // Having obtained RGB, convert channels to hex
    r = Math.round((r + m) * 255).toString(16);
    g = Math.round((g + m) * 255).toString(16);
    b = Math.round((b + m) * 255).toString(16);

    // Prepend 0s, if necessary
    if (r.length === 1) r = '0' + r;
    if (g.length === 1) g = '0' + g;
    if (b.length === 1) b = '0' + b;

    return r + g + b;
}

// hex to hex
function getColorwheel(hex) {
    let rgb = hexToRgb(hex);
    let h = getHue(rgb);
    let hsl = {
        h,
        s: 100,
        l: 50,
    };

    return hslToHex(hsl);
}

export {
    hexToRGB,
    isDark,
    generateBgString,
    generateStopsBgString,
    getColorwheel,
    generateBgDisplayString,
};

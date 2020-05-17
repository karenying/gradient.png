export function hexToRGB(hex, primary) {
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

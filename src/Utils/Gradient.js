class Gradient {
    constructor(colors, linear, degrees) {
        this.colors = colors; // array of Color objects
        this.linear = linear; // false = radial
        this.degrees = degrees; // if linear
    }
}

export { Gradient };

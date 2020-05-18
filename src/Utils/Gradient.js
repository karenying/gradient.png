class Gradient {
    constructor(colors, linear, degrees, name) {
        this.colors = colors; // array of Color objects
        this.linear = linear; // false = radial
        this.degrees = degrees; // if linear
        this.name = name;
    }
}

export { Gradient };

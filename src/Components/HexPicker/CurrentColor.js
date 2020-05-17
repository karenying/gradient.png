import React from 'react';
import '../../Styles/HexPicker/CurrentColor.css';

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
    }
    return parseInt(s, 16);
}

class CurrentColor extends React.Component {
    state = {
        hex: '3eb489',
        r: 62,
        b: 180,
        g: 137,
    };

    handleHexChange = (e) => {
        const hex = e.target.value.toLowerCase();

        const r = hexToRGB(hex, 'r');
        const g = hexToRGB(hex, 'g');
        const b = hexToRGB(hex, 'b');
        this.setState({ hex, r, g, b });
    };

    handleRChange = (e) => {
        let r = e.target.value;
        let { hex } = this.state;
        let rHex = parseInt(r).toString(16);
        if (rHex.length === 1) {
            rHex = '0' + rHex;
        }

        hex = rHex + hex.substring(2, 6);
        this.setState({ hex, r });
    };

    isNumberKey = (e) => {
        console.log(e.target.keyCode);
        return e.keyCode >= 48 && e.keyCode <= 57;
    };

    render() {
        const { hex, r, g, b } = this.state;
        return (
            <div className='current-color-container'>
                <h1>COLOR</h1>
                <div className='current-color-content'>
                    <div
                        className='current-color-colorbox'
                        style={{ backgroundColor: '#' + hex }}
                    ></div>
                    <div className='current-color-info'>
                        <p>#</p>
                        <input
                            type='text'
                            value={hex}
                            onChange={this.handleHexChange}
                        ></input>
                        <p>R</p>
                        <input
                            type='number'
                            value={r}
                            onChange={this.handleRChange}
                            onKeyPress={this.isNumberKey}
                        ></input>
                        <p>G</p>
                        <input type='number' value={g}></input>
                        <p>B</p>
                        <input type='number' value={b}></input>
                    </div>
                </div>
            </div>
        );
    }
}

export default CurrentColor;

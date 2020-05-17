import React from 'react';
import '../../Styles/HexPicker/CurrentColor.css';
import { hexToRGB } from '../../Utils/colorUtils';

class CurrentColor extends React.Component {
    state = {
        hex: 'da71d6',
        r: 218,
        g: 113,
        b: 214,
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

    render() {
        const { hex, r, g, b } = this.state;

        return (
            <div className='current-color-container'>
                <h2>COLOR</h2>
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

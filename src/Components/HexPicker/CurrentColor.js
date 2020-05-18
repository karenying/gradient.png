import React from 'react';
import '../../Styles/HexPicker/CurrentColor.css';

class CurrentColor extends React.Component {
    /*
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
    }; */

    render() {
        /*const { hex, r, g, b } = this.state; */

        const { color } = this.props;
        const { hex } = color;

        return (
            <div className='currentcolor-container'>
                <h2>COLOR</h2>
                <div className='currentcolor-content'>
                    <div
                        className='currentcolor-colorbox'
                        style={{ backgroundColor: '#' + hex }}
                    ></div>
                    <div className='currentcolor-info'>
                        <p>#</p>
                        <input
                            type='text'
                            spellCheck='false'
                            value={hex.toLowerCase()}
                            // onChange={this.handleHexChange}
                        ></input>
                        <p>R</p>
                        <input
                            type='number'
                            value={color.getRGB('r')}
                            // onChange={this.handleRChange}
                        ></input>
                        <p>G</p>
                        <input
                            type='number'
                            value={color.getRGB('g')}
                            // onChange={() => {}}
                        ></input>
                        <p>B</p>
                        <input
                            type='number'
                            value={color.getRGB('b')}
                            // onChange={() => {}}
                        ></input>
                    </div>
                </div>
            </div>
        );
    }
}

export default CurrentColor;

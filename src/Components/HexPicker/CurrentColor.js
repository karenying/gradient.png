import React from 'react';
import '../../Styles/HexPicker/CurrentColor.css';

function CurrentColor(props) {
    const { color, handleHexChange } = props;
    const { hex } = color;
    let r = color.getRGB('r'),
        g = color.getRGB('g'),
        b = color.getRGB('b');

    console.log(g);
    if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) {
        r = g = b = '';
    }

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
                        onChange={(e) => handleHexChange(e, false)}
                    ></input>
                    <p>R</p>
                    <input
                        type='number'
                        value={r}
                        // onChange={this.handleRChange}
                    ></input>
                    <p>G</p>
                    <input
                        type='number'
                        value={g}
                        // onChange={() => {}}
                    ></input>
                    <p>B</p>
                    <input
                        type='number'
                        value={b}
                        // onChange={() => {}}
                    ></input>
                </div>
            </div>
        </div>
    );
}

export default CurrentColor;

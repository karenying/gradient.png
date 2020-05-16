import React from 'react';
import '../../Styles/HexPicker/CurrentColor.css';

function hexToRGB(hex, color) {
    let s;
    switch (color) {
        case 'r':
            s = hex.substring(1, 3);
            break;
        case 'g':
            s = hex.substring(3, 5);
            break;
        case 'b':
            s = hex.substring(5, 7);
            break;
    }
    return parseInt(s, 16);
}

class CurrentColor extends React.Component {
    state = {
        color: '#3eb489',
    };

    handleHexChange = (e) => {
        let hex = e.target.value;
        this.setState({ color: hex });
    };

    handleRChange = (e) => {
        let r = e.target.value;
    };

    render() {
        const { color } = this.state;
        const r = hexToRGB(color, 'r');
        const g = hexToRGB(color, 'b');
        const b = hexToRGB(color, 'b');
        return (
            <div className='current-color-container'>
                <h1>COLOR</h1>
                <div className='current-color-content'>
                    <div
                        className='current-color-colorbox'
                        style={{ backgroundColor: color }}
                    ></div>
                    <div className='current-color-info'>
                        <p>#</p>
                        <input
                            type='text'
                            value={color}
                            onChange={this.handleHexChange}
                        ></input>
                        <p>R</p>
                        <input type='text' value={r}></input>
                        <p>G</p>
                        <input type='text' value={g}></input>
                        <p>B</p>
                        <input type='text' value={b}></input>
                    </div>
                </div>
            </div>
        );
    }
}

export default CurrentColor;

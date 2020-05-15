import React from 'react';
import '../../Styles/HexPicker/ColorWheel.css';

class ColorWheel extends React.Component {
    render() {
        return (
            <div className='colorwheel-container'>
                <div className='colorwheel-gradient'></div>
            </div>
        );
    }
}

export default ColorWheel;

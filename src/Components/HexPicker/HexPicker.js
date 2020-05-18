import React from 'react';
import '../../Styles/HexPicker/HexPicker.css';
import Slide from './Slide';
import HexGradient from './HexGradient';
import CurrentColor from './CurrentColor';

function HexPicker(props) {
    const { colorwheelColor, color } = props;
    return (
        <div className='hexpicker-container'>
            <CurrentColor color={color} />
            <div className='hexpicker-bottom'>
                <HexGradient colorwheelColor={colorwheelColor} />
                <Slide />
            </div>
        </div>
    );
}

export default HexPicker;

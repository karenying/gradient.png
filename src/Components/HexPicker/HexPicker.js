import React from 'react';
import '../../Styles/HexPicker/HexPicker.css';
import Slide from './Slide';
import HexGradient from './HexGradient';
import CurrentColor from './CurrentColor';

class HexPicker extends React.Component {
    render() {
        const { colorwheelColor, color } = this.props;
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
}

export default HexPicker;

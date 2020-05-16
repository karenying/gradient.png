import React from 'react';
import '../../Styles/HexPicker/HexPicker.css';
import Slide from './Slide';
import HexGradient from './HexGradient';
import CurrentColor from './CurrentColor';

class HexPicker extends React.Component {
    render() {
        return (
            <div className='hexpicker-container'>
                <CurrentColor />
            </div>
        );
    }
}

export default HexPicker;

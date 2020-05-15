import React from 'react';
import '../../Styles/HexPicker/Slider.css';

class Slider extends React.Component {
    render() {
        const { onMouseDown } = this.props;
        return (
            <div className='colorwheel-slider' onMouseDown={onMouseDown}></div>
        );
    }
}

export default Slider;

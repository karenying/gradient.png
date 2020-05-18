import React from 'react';
import '../../Styles/HexPicker/HexGradient.css';

class HexGradient extends React.Component {
    render() {
        const { colorwheelColor } = this.props;
        return (
            <div className='hexgradient-container'>
                <div
                    className='hexgradient-base'
                    style={{ background: '#' + colorwheelColor }}
                ></div>
                <div className='hexgradient-white'></div>
                <div className='hexgradient-black'></div>
            </div>
        );
    }
}

export default HexGradient;

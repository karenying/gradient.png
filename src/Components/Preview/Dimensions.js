import React from 'react';
import '../../Styles/Preview/Dimensions.css';

function Dimensions(props) {
    const { height, width } = props;

    return (
        <div className='dimensions-container'>
            <p>W</p>
            <input
                type='number'
                value={width}
                style={{ marginLeft: '10px', marginRight: '15px' }}
            ></input>
            <p>H</p>
            <input
                type='number'
                value={height}
                style={{ marginRight: '10px', marginLeft: '15px' }}
            ></input>
        </div>
    );
}

export default Dimensions;

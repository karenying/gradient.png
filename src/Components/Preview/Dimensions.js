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
                style={{ marginLeft: '5px', marginRight: '10px' }}
            ></input>
            <p>H</p>
            <input
                type='number'
                value={height}
                style={{ marginRight: '15px', marginLeft: '5px' }}
            ></input>
        </div>
    );
}

export default Dimensions;

import React from 'react';
import '../../Styles/Preview/Dimensions.css';

function Dimensions(props) {
    const { height, width } = props;

    return (
        <div className='dimensions-container'>
            <p>W</p>
            <input type='number' value={width}></input>
            <p>H</p>
            <input type='number' value={height}></input>
        </div>
    );
}

export default Dimensions;

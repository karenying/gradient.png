import React from 'react';
import '../../Styles/ImagePreview/Dimensions.css';

function Dimensions(props) {
    const { height, width } = props;

    return (
        <div className='dimensions-container'>
            <h2>W</h2>
            <input type='number' value={width}></input>
            <h2>H</h2>
            <input type='number' value={height}></input>
        </div>
    );
}

export default Dimensions;

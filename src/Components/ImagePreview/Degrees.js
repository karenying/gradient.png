import React from 'react';
import '../../Styles/ImagePreview/Degrees.css';

function Degrees(props) {
    const { degrees } = props;

    return (
        <div className='degrees-container'>
            <h2>°</h2>
            <input type='number' value={degrees}></input>
        </div>
    );
}

export default Degrees;

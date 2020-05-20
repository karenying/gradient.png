import React from 'react';
import '../../Styles/Preview/Degrees.css';

function Degrees(props) {
    const { degrees } = props;

    return (
        <div className='degrees-container'>
            <p>°</p>
            <input type='number' value={degrees}></input>
        </div>
    );
}

export default Degrees;

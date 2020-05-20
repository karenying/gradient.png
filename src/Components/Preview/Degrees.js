import React from 'react';
import '../../Styles/Preview/Degrees.css';

function Degrees(props) {
    const { degrees, isLinear } = props;
    const display = isLinear ? 'flex' : 'none';

    return (
        <div className='degrees-container' style={{ display }}>
            <p>°</p>
            <input
                type='number'
                value={degrees}
                style={{ marginLeft: '10px' }}
            ></input>
        </div>
    );
}

export default Degrees;

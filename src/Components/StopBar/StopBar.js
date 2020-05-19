import React from 'react';
import '../../Styles/StopBar/StopBar.css';

function StopBar(props) {
    const { gradient } = props;
    const background = gradient.toStopBarBgString();

    return (
        <div className='stopbar-container'>
            <div className='stopbar-content' style={{ background }}></div>
        </div>
    );
}

export default StopBar;

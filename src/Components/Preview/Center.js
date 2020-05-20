import React from 'react';
import '../../Styles/Preview/Center.css';

function Center(props) {
    const { center } = props;
    const positions = [
        'top left',
        'top center',
        'top right',
        'center left',
        'center center',
        'center right',
        'bottom left',
        'bottom center',
        'bottom right',
    ];

    function click(position) {
        console.log(position);
    }

    const renderPositions = positions.map((position) =>
        position === center ? (
            <div className='center-container-item-selected' />
        ) : (
            <div
                className='center-container-item'
                onClick={() => click(position)}
            />
        )
    );
    return <div className='center-container'>{renderPositions}</div>;
}

export default Center;

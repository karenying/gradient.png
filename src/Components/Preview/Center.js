import React from 'react';
import '../../Styles/Preview/Center.css';

function Center(props) {
    const { center, clickFunction } = props;
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

    const renderPositions = positions.map((position) =>
        position === center ? (
            <div
                className='center-container-item-selected'
                key={'center' + position}
            />
        ) : (
            <div
                className='center-container-item'
                onClick={() => clickFunction(position)}
                key={'center' + position}
            />
        )
    );
    return <div className='center-container'>{renderPositions}</div>;
}

export default Center;

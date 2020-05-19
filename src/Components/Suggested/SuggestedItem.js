import React from 'react';
import '../../Styles/Suggested/SuggestedItem.css';

function SuggestedItem(props) {
    const { gradient, selected, selectFunction } = props;
    const background = gradient.toBgString();
    const selectedDiv = selected ? 'suggesteditem-selected' : '';

    return (
        <div className={selectedDiv}>
            <div className='suggesteditem-container' onClick={selectFunction}>
                <div
                    className='suggesteditem-colorbox'
                    style={{ background }}
                ></div>
                <p>{gradient.name || ''}</p>
            </div>
        </div>
    );
}

export default SuggestedItem;

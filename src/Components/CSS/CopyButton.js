import React from 'react';
import '../../Styles/CSS/CopyButton.css';
import { MdContentCopy } from 'react-icons/md';
import { INPUT_TEXT_GRAY } from '../../Utils/hexConstants';

function CopyButton(props) {
    return (
        <div className='copybutton-container'>
            <MdContentCopy
                size='23px'
                color={INPUT_TEXT_GRAY}
                style={{ margin: '10px' }}
            />
        </div>
    );
}

export default CopyButton;

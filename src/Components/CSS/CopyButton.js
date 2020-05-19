import React from 'react';
import '../../Styles/CSS/CopyButton.css';
import { MdContentCopy } from 'react-icons/md';
import { INPUT_TEXT_GRAY } from '../../Utils/hexConstants';

function CopyButton(props) {
    const { clickFunction } = props;

    return (
        <div
            className='copybutton-container'
            onClick={clickFunction}
            title='Copy CSS to clipboard'
        >
            <MdContentCopy
                size='20px'
                color={INPUT_TEXT_GRAY}
                style={{ margin: '10px' }}
            />
        </div>
    );
}

export default CopyButton;

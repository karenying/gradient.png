import React from 'react';
import '../../Styles/ImagePreview/ExpandButton.css';
import { BsArrowsAngleExpand } from 'react-icons/bs';
import { INPUT_TEXT_GRAY } from '../../Utils/hexConstants';

function ExpandButton(props) {
    const { clickFunction } = props;

    return (
        <div
            className='expandbutton-container'
            onClick={clickFunction}
            title='See full image'
        >
            <BsArrowsAngleExpand
                size='20px'
                color={INPUT_TEXT_GRAY}
                style={{ margin: '10px' }}
            />
        </div>
    );
}

export default ExpandButton;

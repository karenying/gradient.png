import React from 'react';
import '../../Styles/Preview/ExpandButton.css';
import { BsArrowsAngleExpand } from 'react-icons/bs';
import { INPUT_TEXT_GRAY } from '../../Utils/hexConstants';
import { ButtonBase } from '@material-ui/core';

function ExpandButton(props) {
    const { clickFunction, display } = props;
    const style = display ? { '': '' } : { display: 'none' };

    return (
        <div
            className='expandbutton-container'
            onClick={clickFunction}
            title='See full image'
            style={style}
        >
            <ButtonBase centerRipple>
                <BsArrowsAngleExpand
                    size='20px'
                    color={INPUT_TEXT_GRAY}
                    style={{ margin: '10px' }}
                />
            </ButtonBase>
        </div>
    );
}

export default ExpandButton;

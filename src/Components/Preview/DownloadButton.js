import React from 'react';
import '../../Styles/Preview/DownloadButton.css';
import { FiDownload } from 'react-icons/fi';
import { INPUT_TEXT_GRAY } from '../../Utils/hexConstants';
import { ButtonBase } from '@material-ui/core';

function DownloadButton(props) {
    const { clickFunction, display } = props;
    const style = display ? { '': '' } : { display: 'none' };

    return (
        <div
            className='downloadbutton-container'
            onClick={clickFunction}
            title='Download image'
            style={style}
        >
            <ButtonBase centerRipple>
                <FiDownload
                    size='20px'
                    color={INPUT_TEXT_GRAY}
                    style={{ margin: '10px' }}
                />
            </ButtonBase>
        </div>
    );
}

export default DownloadButton;

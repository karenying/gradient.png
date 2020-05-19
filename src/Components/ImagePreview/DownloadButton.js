import React from 'react';
import '../../Styles/ImagePreview/DownloadButton.css';
import { FiDownload } from 'react-icons/fi';
import { INPUT_TEXT_GRAY } from '../../Utils/hexConstants';

function DownloadButton(props) {
    // const { clickFunction } = props;

    return (
        <div
            className='downloadbutton-container'
            // onClick={clickFunction}
            title='Download image'
        >
            <FiDownload
                size='20px'
                color={INPUT_TEXT_GRAY}
                style={{ margin: '10px' }}
            />
        </div>
    );
}

export default DownloadButton;

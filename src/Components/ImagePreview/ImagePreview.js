import React from 'react';
import '../../Styles/ImagePreview/ImagePreview.css';
import DownloadButton from './DownloadButton';
import ExpandButton from './ExpandButton';
import Dimensions from './Dimensions';

function ImagePreview(props) {
    let { height, width, gradient } = props;
    const background = gradient.generateBgString();
    const DIV_MAX = 400;

    let longer = Math.max(height, width);
    let shorter = Math.min(height, width);

    let scaledHeight, scaledWidth;

    if (longer === height) {
        scaledHeight = DIV_MAX;
        scaledWidth = (DIV_MAX / longer) * shorter;
    } else {
        scaledWidth = DIV_MAX;
        scaledHeight = (DIV_MAX / longer) * shorter;
    }

    return (
        <div className='imagepreview-container'>
            <h2>IMAGE PREVIEW</h2>
            <div
                className='imagepreview-content'
                style={{
                    background,
                    height: scaledHeight,
                    width: scaledWidth,
                }}
            ></div>
            <div className='imagepreview-interface'>
                <Dimensions height={height} width={width} />
                <ExpandButton />
                <DownloadButton />
            </div>
        </div>
    );
}

export default ImagePreview;

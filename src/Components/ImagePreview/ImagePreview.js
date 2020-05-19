import React from 'react';
import '../../Styles/ImagePreview/ImagePreview.css';
import DownloadButton from './DownloadButton';
import ExpandButton from './ExpandButton';
import Dimensions from './Dimensions';
import { createGradient } from '../../Utils/colorUtils';

class ImagePreview extends React.Component {
    createGradient() {
        const { gradient, width, height } = this.props;
        return createGradient(gradient, width, height);
    }

    download = () => {
        const url = this.createGradient();
        const link = document.createElement('a');
        link.download = 'gradient.png';
        link.href = url;
        link.click();
    };

    expand = () => {
        const url = this.createGradient();
        const w = window.open('about:blank');
        const image = new Image();
        image.src = url;

        setTimeout(function () {
            w.document.write(image.outerHTML);
        }, 0);
    };

    render() {
        let { gradient, width, height } = this.props;
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
                >
                    <ExpandButton clickFunction={this.expand} />
                    <DownloadButton clickFunction={this.download} />
                </div>
                <div className='imagepreview-interface'>
                    <Dimensions height={height} width={width} />
                </div>
            </div>
        );
    }
}

export default ImagePreview;

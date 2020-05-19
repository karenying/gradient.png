import React from 'react';
import '../../Styles/ImagePreview/ImagePreview.css';
import DownloadButton from './DownloadButton';
import ExpandButton from './ExpandButton';
import Dimensions from './Dimensions';

class ImagePreview extends React.Component {
    download = () => {
        const { gradient, width, height } = this.props;
        const { stack, linear, degrees } = gradient;

        const canvas = document.createElement('CANVAS');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        // does NOT account for angle
        const g = ctx.createLinearGradient(0, 0, 0, height);
        stack.forEach((color) => {
            const { hex, stop } = color;
            g.addColorStop(stop / 100, '#' + hex);
        });

        // Fill with gradient
        ctx.fillStyle = g;
        // (startx, starty, endx, endy)
        ctx.fillRect(0, 0, width, height);

        const link = document.createElement('a');
        link.download = 'gradient.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
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
                    <ExpandButton />
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

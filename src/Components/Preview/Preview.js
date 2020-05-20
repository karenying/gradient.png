import React from 'react';
import '../../Styles/Preview/Preview.css';
import DownloadButton from './DownloadButton';
import ExpandButton from './ExpandButton';
import Dimensions from './Dimensions';
import Degrees from './Degrees';
import LinearRadial from './LinearRadial';
import { generateImage } from '../../Utils/colorUtils';

class Preview extends React.Component {
    generateImage() {
        const { gradient, width, height } = this.props;
        return generateImage(gradient, width, height);
    }

    download = () => {
        const url = this.generateImage();
        const link = document.createElement('a');
        link.download = 'gradient.png';
        link.href = url;
        link.click();
    };

    expand = () => {
        const url = this.generateImage();
        const w = window.open('about:blank');
        const image = new Image();
        image.src = url;

        setTimeout(function () {
            w.document.write(image.outerHTML);
        }, 0);
    };

    render() {
        const {
            gradient,
            width,
            height,
            handleLinearRadialChange,
        } = this.props;
        const { degrees, isLinear } = gradient;
        const background = gradient.toBgString();
        const DIV_MAX = 350;

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
            <div className='preview-container'>
                <div className='preview-header'>
                    <h2>PREVIEW</h2>
                    <LinearRadial
                        isLinear={isLinear}
                        changeFunction={handleLinearRadialChange}
                    />
                </div>

                <div
                    className='preview-content'
                    style={{
                        background,
                        height: scaledHeight,
                        width: scaledWidth,
                    }}
                >
                    <ExpandButton clickFunction={this.expand} />
                    <DownloadButton clickFunction={this.download} />
                </div>
                <div className='preview-interface'>
                    <Dimensions height={height} width={width} />
                    <Degrees degrees={degrees} />
                </div>
            </div>
        );
    }
}

export default Preview;

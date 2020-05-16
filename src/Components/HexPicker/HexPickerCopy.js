import React from 'react';
import '../../Styles/HexPicker/HexPicker.css';
import Slide from './Slide';
import Slider from './Slider';
import HexGradient from './HexGradient';

const getPercentage = (current, max) => (100 * current) / max;

const getLeft = (percentage) => `calc(${percentage}% - 5px)`;

class HexPicker extends React.Component {
    state = {
        sliderRef: React.createRef(),
        slideRef: React.createRef(),
        diff: React.createRef(),
    };

    handleMouseMove = (event) => {
        let { sliderRef, slideRef, diff } = this.state;

        let newX =
            event.clientX -
            diff.current -
            sliderRef.current.getBoundingClientRect().left;

        const end =
            sliderRef.current.offsetWidth - slideRef.current.offsetWidth;

        const start = 0;

        if (newX < start) {
            newX = 0;
        }
        if (newX > end) {
            newX = end;
        }

        const newPercentage = getPercentage(newX, end);

        slideRef.current.style.left = getLeft(newPercentage);
        this.setState({ slideRef });
    };

    handleMouseUp = () => {
        document.removeEventListener('mouseup', this.handleMouseUp);
        document.removeEventListener('mousemove', this.handleMouseMove);
    };

    handleMouseDown = (event) => {
        let { slideRef, diff } = this.state;
        diff.current =
            event.clientX - slideRef.current.getBoundingClientRect().left;

        this.setState({ diff });
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
    };

    render() {
        const { sliderRef, slideRef } = this.state;
        return (
            <div className='hexpicker-container'>
                <Slide ref={slideRef} />
                <Slider ref={sliderRef} onMouseDown={this.handleMouseDown} />
                <HexGradient onClick={this.handleOnClick} />
            </div>
        );
    }
}

export default HexPicker;

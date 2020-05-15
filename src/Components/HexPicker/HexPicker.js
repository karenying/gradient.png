import React from 'react';
import '../../Styles/HexPicker/HexPicker.css';
import ColorWheel from './ColorWheel';
import Slider from './Slider';

const getPercentage = (current, max) => (100 * current) / max;

const getLeft = (percentage) => `calc(${percentage}% - 5px)`;

class HexPicker extends React.Component {
    state = {
        sliderRef: React.createRef(),
        gradientRef: React.createRef(),
        diff: React.createRef(),
    };

    handleMouseMove = (event) => {
        let { sliderRef, gradientRef, diff } = this.state;

        let newX =
            event.clientX -
            diff.current -
            sliderRef.current.getBoundingClientRect().left;

        const end =
            sliderRef.current.offsetWidth - gradientRef.current.offsetWidth;

        const start = 0;

        if (newX < start) {
            newX = 0;
        }
        if (newX > end) {
            newX = end;
        }

        const newPercentage = getPercentage(newX, end);

        gradientRef.current.style.left = getLeft(newPercentage);
        this.setState({ gradientRef });
    };

    handleMouseUp = () => {
        document.removeEventListener('mouseup', this.handleMouseUp);
        document.removeEventListener('mousemove', this.handleMouseMove);
    };

    handleMouseDown = (event) => {
        console.log(event);
        let { gradientRef, diff } = this.state;
        diff.current =
            event.clientX - gradientRef.current.getBoundingClientRect().left;

        this.setState({ diff });
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
    };

    handleOnClick = () => {
        console.log('hi');
    };

    render() {
        const { sliderRef, gradientRef } = this.state;
        return (
            <div className='hexpicker-container'>
                <ColorWheel ref={gradientRef} onClick={this.handleOnClick} />
                {/*
                <Slider
                    // ref={sliderRef}
                    // onMouseDown={this.handleMouseDown}
                    onClick={this.handleOnClick}
                />
                
                <div onClick={this.handleOnClick}>
                    <h1>Hello</h1>
                </div>
                */}
            </div>
        );
    }
}

export default HexPicker;

import React from 'react';
import './App.css';
import Header from './Components/Header';
import HexPicker from './Components/HexPicker/HexPicker';
import Stack from './Components/Stack/Stack';
import Suggested from './Components/Suggested/Suggested';
import StopBar from './Components/StopBar/StopBar';
import CSS from './Components/CSS/CSS';
import Preview from './Components/Preview/Preview';
import { SUGGESTIONS } from './Utils/gradientConstants';
import { Color } from './Utils/Color';
import { shuffle } from './Utils/generalUtils';
import { IPHONE_10, IPHONE_6 } from './Utils/screenDimensionConstants';
import { MAX_SIZE, ENTER_KEY } from './Utils/inputConstants';

class App extends React.Component {
    state = {
        gradient: null,
        selected: 0, // color selected out of gradient
        width: 0,
        height: 0,
        suggestedSelected: '',
        suggested: [],
        value: null,
    };

    componentWillMount() {
        let shuffledSuggested = shuffle(SUGGESTIONS);
        let shownSuggested = shuffledSuggested.slice(0, 4);
        let first = shownSuggested[0];

        this.setState({
            gradient: first.clone(),
            suggestedSelected: first.name,
            suggested: shownSuggested,
            width: IPHONE_6.width,
            height: IPHONE_6.height,
            value: first.stack[0].stop,
        });
    }

    addColor = () => {
        const { gradient, selected } = this.state;
        let gradientCopy = gradient.clone();
        let { stack } = gradientCopy;

        if (stack.length < 5) {
            stack[selected].selected = false;

            stack.forEach((c) => {
                c.stop = Math.round((c.index / stack.length) * 100);
            });

            const defaultColor = new Color('ffffff', 100, true, stack.length);
            stack.push(defaultColor);

            this.setState({
                gradient: gradientCopy,
                selected: defaultColor.index,
                value: 100,
            });
        }
    };

    deleteColor = (e, deletedIndex) => {
        const { gradient, selected } = this.state;
        let gradientCopy = gradient.clone();
        let { stack } = gradientCopy;

        this.unsetSuggested();

        if (stack.length > 2) {
            e.stopPropagation();

            if (deletedIndex === selected) {
                let nextSelected;

                if (deletedIndex === stack.length - 1) {
                    nextSelected = deletedIndex - 1;
                } else {
                    nextSelected = deletedIndex + 1;
                }
                stack[nextSelected].selected = true;
            }

            if (deletedIndex <= selected) {
                if (deletedIndex !== 0) {
                    this.setState((prevState, props) => ({
                        selected: prevState.selected - 1,
                    }));
                }
            }

            if (deletedIndex !== stack.length - 1) {
                for (let i = deletedIndex + 1; i < stack.length; i++) {
                    stack[i].index--;
                }
            }

            stack.splice(deletedIndex, 1);

            stack.forEach((c) => {
                c.stop = Math.round((c.index / (stack.length - 1)) * 100);
            });

            this.setState({
                gradient: gradientCopy,
            });
        }
    };

    changeSelected = (index, value) => {
        const { gradient, selected } = this.state;
        const { stack } = gradient;
        let stackCopy = [...stack];

        // set curr selected to false
        stackCopy[selected].selected = false;

        // set arg to selected and change this.state.selected
        stackCopy[index].selected = true;

        this.setState((prevState) => ({
            gradient: {
                ...prevState.gradient,
                stack: stackCopy,
            },
            selected: index,
            value,
        }));
    };

    setSuggested = (e, suggestedName) => {
        e.stopPropagation();

        const { suggested } = this.state;

        let selectedGradient;
        suggested.forEach((gradient) => {
            if (gradient.name === suggestedName) {
                let clone = gradient.clone();
                this.setState({ gradient: clone });
                selectedGradient = clone;
            }
        });

        this.setState({
            suggestedSelected: suggestedName,
            selected: 0,
            value: selectedGradient.stack[0].stop,
        });
    };

    unsetSuggested = () => {
        const { suggestedSelected } = this.state;
        if (suggestedSelected) {
            this.setState({ suggestedSelected: '' });
        }
    };

    handleLinearRadialChange = () => {
        const { gradient } = this.state;
        let gradientCopy = gradient.clone();
        const change = !gradient.isLinear;
        gradientCopy.isLinear = change;

        this.setState({
            gradient: gradientCopy,
        });
    };

    handleCenterChange = (center) => {
        const { gradient } = this.state;
        let gradientCopy = gradient.clone();
        gradientCopy.center = center;

        this.setState({
            gradient: gradientCopy,
        });
    };

    handleWidthChange = (e) => {
        let { value } = e.target;

        if (value) {
            value = Number(value);
        }
        if (value <= MAX_SIZE) {
            this.setState({
                width: value,
            });
        }
    };

    handleHeightChange = (e) => {
        let { value } = e.target;

        if (value) {
            value = Number(value);
        }
        if (value <= MAX_SIZE) {
            this.setState({
                height: value,
            });
        }
    };

    handleDegreesChange = (e) => {
        let { value } = e.target;

        if (value) {
            value = Number(value);
        }

        if (value >= 0 && value < 360) {
            const { gradient } = this.state;
            let gradientCopy = gradient.clone();
            gradientCopy.degrees = value;

            this.setState({
                gradient: gradientCopy,
            });
        }
    };

    // SHOULD BE ON ENTER
    handleStopChange = (e) => {
        let { value } = e.target;

        if (value) {
            value = Number(value);
        }
        const { gradient, selected } = this.state;
        if (value >= 0 && value <= 100) {
            // if value/stop is empty????? for all the tostrings, skip over it
            let gradientCopy = gradient.clone();
            let { stack } = gradientCopy;
            stack[selected].stop = value;
            let newSelected = gradientCopy.sortStack(); // make it mutable
            this.setState({
                gradient: gradientCopy,
                selected: newSelected,
            });
        } else {
            this.setState({ value: gradient.stack[selected].stop });
        }
    };

    handleKeyDown = (e) => {
        if (e.keyCode === ENTER_KEY) {
            this.handleStopChange(e);
        }
    };

    setValue = (value) => {
        this.setState({ value });
    };

    changeValue = (e) => {
        let { value } = e.target;
        this.setState({ value });
    };

    render() {
        const {
            gradient,
            suggestedSelected,
            suggested,
            selected,
            height,
            width,
            value,
        } = this.state;
        const { stack } = gradient;
        const color = stack[selected];
        const colorwheelColor = color.getColorwheel();

        console.log(this.state.value);

        return (
            <div className='App' onClick={this.unsetSuggested}>
                <Header />
                <div className='container'>
                    <div className='wrapper'>
                        <div className='left'>
                            <StopBar gradient={gradient} />
                            <div className='color-picker'>
                                <div className='color-picker-left'>
                                    <HexPicker
                                        colorwheelColor={colorwheelColor}
                                        color={color}
                                    />
                                </div>
                                <div className='color-picker-right'>
                                    <Stack
                                        gradient={gradient}
                                        addColor={this.addColor}
                                        changeSelected={this.changeSelected}
                                        deleteColor={this.deleteColor}
                                        handleKeyDown={this.handleKeyDown}
                                        changeValue={this.changeValue}
                                        value={value}
                                    />
                                    <Suggested
                                        suggested={suggested}
                                        selected={suggestedSelected}
                                        setSuggested={this.setSuggested}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='wrapper'>
                        <div className='right'>
                            <Preview
                                gradient={gradient}
                                height={height}
                                width={width}
                                handleLinearRadialChange={
                                    this.handleLinearRadialChange
                                }
                                handleCenterChange={this.handleCenterChange}
                                handleWidthChange={this.handleWidthChange}
                                handleHeightChange={this.handleHeightChange}
                                handleDegreesChange={this.handleDegreesChange}
                            />
                            <CSS gradient={gradient} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

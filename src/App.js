import React from 'react';
import './App.css';
import Header from './Components/Header';
import HexPicker from './Components/HexPicker/HexPicker';
import Stack from './Components/Stack/Stack';
import Suggested from './Components/Suggested/Suggested';
import StopBar from './Components/StopBar/StopBar';
import CSS from './Components/CSS/CSS';
import ImagePreview from './Components/ImagePreview/ImagePreview';
import { SUGGESTIONS } from './Utils/gradientConstants';
import { Color } from './Utils/Color';
import { shuffle } from './Utils/generalUtils';
import { IPHONE_10 } from './Utils/screenDimensionConstants';

class App extends React.Component {
    state = {
        gradient: null,
        selected: 0, // color selected out of gradient
        width: 0,
        height: 0,
        suggestedSelected: '',
        suggested: [],
    };

    componentWillMount() {
        let shuffledSuggested = shuffle(SUGGESTIONS);
        let shownSuggested = shuffledSuggested.slice(0, 4);
        let first = shownSuggested[0];

        this.setState({
            gradient: first.clone(),
            suggestedSelected: first.name,
            suggested: shownSuggested,
            /*
            width: IPHONE_10.width,
            height: IPHONE_10.height, */
            width: 200,
            height: 100,
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

    changeSelected = (index) => {
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
        }));
    };

    setSuggested = (e, suggestedName) => {
        e.stopPropagation();

        const { suggested } = this.state;

        suggested.forEach((gradient) => {
            if (gradient.name === suggestedName) {
                this.setState({ gradient: gradient.clone() });
            }
        });

        this.setState({ suggestedSelected: suggestedName, selected: 0 });
    };

    unsetSuggested = () => {
        this.setState({ suggestedSelected: '' });
    };

    render() {
        const {
            gradient,
            suggestedSelected,
            suggested,
            selected,
            height,
            width,
        } = this.state;
        const { stack } = gradient;
        const color = stack[selected];
        const colorwheelColor = color.getColorwheel();

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
                                    />
                                    <Suggested
                                        suggested={suggested}
                                        selected={suggestedSelected}
                                        selectFunction={this.setSuggested}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='wrapper'>
                        <div className='right'>
                            <ImagePreview
                                gradient={gradient}
                                height={height}
                                width={width}
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

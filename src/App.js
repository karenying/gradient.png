import React from 'react';
import './App.css';
import Header from './Components/Header';
import HexPicker from './Components/HexPicker/HexPicker';
import Stack from './Components/Stack/Stack';
import Suggested from './Components/Suggested/Suggested';
import { KAREN, DORA, STEVEN } from './Utils/gradientConstants';
import { Color } from './Utils/Color';

class App extends React.Component {
    state = {
        gradient: STEVEN,
        selected: 0, // color selected out of gradient
        dimensions: [], // dimensions of generated image
    };

    addColor = () => {
        const { gradient, selected } = this.state;
        const { stack } = gradient;

        if (stack.length < 5) {
            let stackCopy = [...stack];

            // set curr selected to false
            stackCopy[selected].selected = false;

            // scale other stops
            stack.forEach((c) => {
                c.stop = Math.round((c.index / stack.length) * 100);
            });

            // add color to stack and update selected
            const defaultColor = new Color('ffffff', 100, true, stack.length);
            stackCopy.push(defaultColor);

            this.setState((prevState) => ({
                gradient: {
                    ...prevState.gradient,
                    stack: stackCopy,
                },
                selected: defaultColor.index,
            }));
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

    deleteColor = (e, deletedIndex) => {
        const { gradient, selected } = this.state;
        const { stack } = gradient;

        if (stack.length > 2) {
            e.stopPropagation();

            let stackCopy = [...stack];
            // set another as selected
            if (deletedIndex === selected) {
                let nextSelected;
                // deleting the last one
                if (deletedIndex === stack.length - 1) {
                    nextSelected = deletedIndex - 1;
                } else {
                    nextSelected = deletedIndex + 1;
                }
                stackCopy[nextSelected].selected = true;
            }

            // update selected
            if (deletedIndex < selected) {
                this.setState((prevState, props) => ({
                    selected: prevState.selected - 1,
                }));
            }

            // update indices if not the last one
            if (deletedIndex !== stack.length - 1) {
                for (let i = deletedIndex + 1; i < stack.length; i++) {
                    stackCopy[i].index--;
                }
            }

            // remove from stack
            stackCopy.splice(deletedIndex, 1);

            // scale other stops
            stackCopy.forEach((c) => {
                c.stop = Math.round((c.index / (stackCopy.length - 1)) * 100);
            });

            this.setState((prevState) => ({
                gradient: {
                    ...prevState.gradient,
                    stack: stackCopy,
                },
            }));
        }
    };

    render() {
        const { gradient } = this.state;

        return (
            <div className='App'>
                <Header />
                <div className='left'>
                    <div className='color-picker'>
                        <HexPicker />
                        <div className='color-picker-right'>
                            <Stack
                                gradient={gradient}
                                addColor={this.addColor}
                                changeSelected={this.changeSelected}
                                deleteColor={this.deleteColor}
                            />
                            <Suggested />
                        </div>
                    </div>
                </div>
                <div className='right'></div>
            </div>
        );
    }
}

export default App;

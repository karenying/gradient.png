import React from 'react';
import '../../Styles/Stack/Stack.css';
import { Color } from '../../Utils/Color';
import StackItem from './StackItem';
import AddColorButton from './AddColorButton';

class Stack extends React.Component {
    state = {
        stack: [
            new Color('FF5757', 0, false, 0),
            new Color('FF66C5', 25, false, 1),
            new Color('CB6BE7', 50, false, 2),
            new Color('8C52FF', 75, false, 3),
            new Color('5171FF', 100, true, 4),
        ],
        selected: 4,
    };

    addColor = () => {
        const { stack } = this.state;
        let defaultColor = new Color('ffffff', 100, true, stack.length);

        // set other selected to false and scale other stops
        stack.forEach((c) => {
            c.selected = false;
            c.stop = Math.round((c.index / stack.length) * 100);
        });

        // add color to stack and update selected
        this.setState({
            stack: [...stack, defaultColor],
            selected: defaultColor.index,
        });
    };

    deleteColor(deletedIndex) {
        const { stack, selected } = this.state;
        let stackCopy = [...this.state.stack];
        // set another as selected and update this.state.selected
        if (deletedIndex === selected) {
            let nextSelected;
            // deleting the last one
            if (deletedIndex === stack.length - 1) {
                nextSelected = deletedIndex - 1;

                this.setState((prevState, props) => ({
                    selected: prevState.selected - 1,
                }));
            } else {
                nextSelected = deletedIndex + 1;
            }
            stackCopy[nextSelected].selected = true;
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

        this.setState({ stack: stackCopy });
    }

    render() {
        const { stack } = this.state;

        const renderStack = stack.map((color) => (
            <StackItem
                color={color}
                stack={stack}
                clickFunction={() => this.deleteColor(color.index)}
            />
        ));

        return (
            <div className='stack-container'>
                <h2>STACK</h2>
                <div className='stack-container-label'>
                    <p />
                    <p>HEX</p>
                    <p>%</p>
                </div>
                {renderStack}
                <AddColorButton clickFunction={this.addColor} />
            </div>
        );
    }
}

export default Stack;

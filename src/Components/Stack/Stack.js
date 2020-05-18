import React from 'react';
import '../../Styles/Stack/Stack.css';
import { Color } from '../../Utils/Color';
import StackItem from './StackItem';
import AddColorButton from './AddColorButton';

class Stack extends React.Component {
    state = {
        stack: [
            new Color('FF5757', 0, true, 0),
            new Color('FF66C5', 25, false, 1),
            /*
            new Color('CB6BE7', 50, false, 2),
            new Color('8C52FF', 75, false, 3),
            new Color('5171FF', 100, false, 4), */
        ],
        selected: 0,
    };

    addColor = () => {
        const { stack, selected } = this.state;
        if (stack.length < 5) {
            let stackCopy = [...this.state.stack];

            // set curr selected to false
            stackCopy[selected].selected = false;

            // scale other stops
            stack.forEach((c) => {
                c.stop = Math.round((c.index / stack.length) * 100);
            });

            // add color to stack and update selected
            const defaultColor = new Color('ffffff', 100, true, stack.length);
            stackCopy.push(defaultColor);

            this.setState({
                stack: stackCopy,
                selected: defaultColor.index,
            });
        }
    };

    deleteColor(e, deletedIndex) {
        const { stack, selected } = this.state;

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

            this.setState({ stack: stackCopy });
        }
    }

    changeSelected(index) {
        const { stack, selected } = this.state;
        let stackCopy = [...stack];

        // set curr selected to false
        stackCopy[selected].selected = false;

        // set arg to selected and change this.state.selected
        stackCopy[index].selected = true;
        this.setState({ stack: stackCopy, selected: index });
    }

    render() {
        const { stack } = this.state;

        const renderStack = stack.map((color) => (
            <StackItem
                color={color}
                stack={stack}
                deleteFunction={(e) => this.deleteColor(e, color.index)}
                selectFunction={() => this.changeSelected(color.index)}
                key={'stack-item-' + color.index}
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

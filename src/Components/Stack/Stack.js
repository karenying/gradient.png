import React from 'react';
import '../../Styles/Stack/Stack.css';
import StackItem from './StackItem';
import AddColorButton from './AddColorButton';

class Stack extends React.Component {
    render() {
        const { gradient, addColor, changeSelected, deleteColor } = this.props;
        const { stack } = gradient;

        const renderStack = stack.map((color) => (
            <StackItem
                color={color}
                stack={stack}
                deleteFunction={(e) => deleteColor(e, color.index)}
                selectFunction={() => changeSelected(color.index)}
                key={'stackitem-' + color.index}
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
                <AddColorButton clickFunction={addColor} />
            </div>
        );
    }
}

export default Stack;

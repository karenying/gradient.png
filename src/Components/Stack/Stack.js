import React from 'react';
import '../../Styles/Stack/Stack.css';
import StackItem from './StackItem';
import AddColorButton from './AddColorButton';

function Stack(props) {
    const { gradient, addColor, changeSelected, deleteColor } = props;
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
            <AddColorButton
                clickFunction={addColor}
                disabled={stack.length === 5}
            />
        </div>
    );
}

export default Stack;

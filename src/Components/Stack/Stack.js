import React from 'react';
import '../../Styles/Stack/Stack.css';
import StackItem from './StackItem';
import AddColorButton from './AddColorButton';

function Stack(props) {
    const {
        gradient,
        addColor,
        changeSelected,
        deleteColor,
        handleKeyDown,
        changeValue,
        stopValue,
        handleHexChange,
        onDragStart,
        onDragOver,
        onDragEnd,
    } = props;
    const { stack } = gradient;

    const renderStack = stack.map((color) => (
        <StackItem
            color={color}
            stack={stack}
            deleteFunction={(e) => deleteColor(e, color.index)}
            changeSelected={() => changeSelected(color.index)}
            key={'stackitem-' + color.index}
            cannotDelete={stack.length === 2}
            handleKeyDown={handleKeyDown}
            changeValue={changeValue}
            stopValue={stopValue}
            handleHexChange={handleHexChange}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDragEnd={onDragEnd}
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

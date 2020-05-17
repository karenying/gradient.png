import React from 'react';
import '../../Styles/Stack/Stack.css';
import { Color } from '../../Utils/Color';
import StackItem from './StackItem';

class Stack extends React.Component {
    state = {
        stack: [new Color('da71d6', 0), new Color('87cefa', 100)],
    };

    render() {
        const { stack } = this.state;

        const renderStack = stack.map((color) => (
            <StackItem hex={'#' + color.hex} stop={color.stop} />
        ));

        return (
            <div className='stack-container'>
                <h2>Stack</h2>
                {renderStack}
            </div>
        );
    }
}

export default Stack;

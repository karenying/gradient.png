import React from 'react';
import '../../Styles/Stack/Stack.css';
import { Color } from '../../Utils/Color';

class Stack extends React.Component {
    state = {
        stack: [new Color('', '')],
    };
    render() {
        console.log(this.state);
        return (
            <div className='stack-container'>
                <h2>Stack</h2>
            </div>
        );
    }
}

export default Stack;

import React from 'react';
import '../../Styles/Stack/StackItem.css';
import { IoIosClose } from 'react-icons/io';
import { INPUT_TEXT_GRAY } from '../../Utils/hexConstants';

class StackItem extends React.Component {
    state = {};

    render() {
        const { hex, stop } = this.props;
        return (
            <div className='stackitem-container'>
                <input
                    type='text'
                    value={hex}
                    style={{ backgroundColor: hex }}
                ></input>
                <input type='number' value={stop}></input>
                <IoIosClose size='35px' color={INPUT_TEXT_GRAY} />
            </div>
        );
    }
}

export default StackItem;

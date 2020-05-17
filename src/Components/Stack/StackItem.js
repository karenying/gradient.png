import React from 'react';
import '../../Styles/Stack/StackItem.css';
import { IoIosMenu, IoIosClose } from 'react-icons/io';
import { INPUT_TEXT_GRAY } from '../../Utils/hexConstants';

class StackItem extends React.Component {
    state = {};

    render() {
        const { hex, stop } = this.props;
        return (
            <div className='stackitem-container'>
                <div className='stackitem-icon-container'>
                    <div className='stackitem-icon'>
                        <IoIosMenu
                            size='25px'
                            color={INPUT_TEXT_GRAY}
                            style={{ padding: '5px', marginRight: '10px' }}
                        />
                    </div>
                </div>
                <input
                    type='text'
                    value={hex}
                    style={{ backgroundColor: hex }}
                ></input>
                <input type='number' value={stop}></input>
                <div className='stackitem-icon-container'>
                    <div className='stackitem-icon'>
                        <IoIosClose
                            size='35px'
                            color={INPUT_TEXT_GRAY}
                            style={{ marginLeft: '10px' }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default StackItem;

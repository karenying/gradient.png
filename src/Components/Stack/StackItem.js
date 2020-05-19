import React from 'react';
import '../../Styles/Stack/StackItem.css';
import { IoIosMenu, IoIosClose } from 'react-icons/io';
import { INPUT_TEXT_GRAY } from '../../Utils/hexConstants';

function StackItem(props) {
    const { color, deleteFunction, selectFunction } = props;
    const { hex, stop, selected } = color;
    const selectedDiv = selected ? 'stackitem-selected' : '';
    const darkDiv = color.isDark() ? 'stackitem-dark' : '';

    return (
        <div className={selectedDiv}>
            <div className='stackitem-container' onClick={selectFunction}>
                <div className='stackitem-icon-container'>
                    <div className='stackitem-icon'>
                        <IoIosMenu
                            size='25px'
                            color={INPUT_TEXT_GRAY}
                            style={{ padding: '5px', marginRight: '10px' }}
                        />
                    </div>
                </div>
                <div className={darkDiv}>
                    <input
                        type='text'
                        spellCheck='false'
                        value={('#' + hex).toLowerCase()}
                        style={{ backgroundColor: '#' + hex }}
                        onChange={() => {}}
                    ></input>
                </div>
                <input type='number' value={stop} onChange={() => {}}></input>
                <div className='stackitem-icon-container'>
                    <div className='stackitem-icon'>
                        <IoIosClose
                            size='35px'
                            color={INPUT_TEXT_GRAY}
                            title='Delete color'
                            style={{ marginLeft: '7px' }}
                            onClick={deleteFunction}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StackItem;

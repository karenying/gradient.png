import React from 'react';
import '../../Styles/Stack/StackItem.css';
import { IoIosMenu, IoIosClose } from 'react-icons/io';
import { INPUT_TEXT_GRAY } from '../../Utils/hexConstants';

function StackItem(props) {
    const {
        color,
        deleteFunction,
        changeSelected,
        cannotDelete,
        handleKeyDown,

        changeValue,
        value,
    } = props;
    const { hex, stop, selected } = color;
    const selectedDiv = selected ? 'stackitem-selected' : '';
    const darkDiv = color.isDark() ? 'stackitem-dark' : '';
    const closeDiv = cannotDelete ? 'stackitem-no-close' : 'stackitem-close';
    const displayedValue = selected ? value : stop;

    return (
        <div className={selectedDiv}>
            <div className='stackitem-container' onClick={changeSelected}>
                <div className='stackitem-icon-container'>
                    <div className='stackitem-drag'>
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
                <input
                    type='number'
                    value={displayedValue}
                    onKeyDown={(e) => handleKeyDown(e)}
                    onChange={(e) => changeValue(e)}
                ></input>
                <div className='stackitem-icon-container'>
                    <div className={closeDiv}>
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

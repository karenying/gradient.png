import React from 'react';
import '../../Styles/Stack/AddColorButton.css';
import { IoIosAdd } from 'react-icons/io';
import { INPUT_TEXT_GRAY } from '../../Utils/hexConstants';
import { ButtonBase } from '@material-ui/core';

function AddColorButton(props) {
    const { clickFunction, disabled } = props;

    const buttonContainer = disabled
        ? 'add-color-button-disabled'
        : 'add-color-button';

    return (
        <div className='add-color-container'>
            <ButtonBase centerRipple disableRipple={disabled}>
                <div className={buttonContainer} onClick={clickFunction}>
                    <IoIosAdd size='35px' color={INPUT_TEXT_GRAY} />
                    <p>Add Color</p>
                </div>
            </ButtonBase>
        </div>
    );
}

export default AddColorButton;

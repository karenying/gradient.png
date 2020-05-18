import React from 'react';
import '../../Styles/CSS/CSS.css';
import CopyButton from './CopyButton';

function CSS(props) {
    const { gradient } = props;
    const background = gradient.generateBgDisplayString();

    return (
        <div className='css-container'>
            <h2>CSS</h2>
            <div className='css-content'>
                <textarea
                    name='text'
                    rows='9'
                    cols='10'
                    wrap='soft'
                    value={background}
                ></textarea>
                <CopyButton />
            </div>
        </div>
    );
}

export default CSS;

import React from 'react';
import '../../Styles/Suggested/SuggestedItem.css';

class SuggestedItem extends React.Component {
    render() {
        const { gradient } = this.props;

        const background = gradient.generateBackgroundString();

        return (
            <div className='suggesteditem-container'>
                <div
                    className='suggesteditem-colorbox'
                    style={{ background }}
                ></div>
                <p>{gradient.name || ''}</p>
            </div>
        );
    }
}

export default SuggestedItem;

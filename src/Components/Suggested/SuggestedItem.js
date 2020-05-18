import React from 'react';
import '../../Styles/Suggested/SuggestedItem.css';

class SuggestedItem extends React.Component {
    render() {
        const { gradient, selected, selectedFunction } = this.props;
        const background = gradient.generateBackgroundString();
        const selectedDiv = selected ? 'suggesteditem-selected' : '';

        return (
            <div className={selectedDiv}>
                <div
                    className='suggesteditem-container'
                    onClick={selectedFunction}
                >
                    <div
                        className='suggesteditem-colorbox'
                        style={{ background }}
                    ></div>
                    <p>{gradient.name || ''}</p>
                </div>
            </div>
        );
    }
}

export default SuggestedItem;

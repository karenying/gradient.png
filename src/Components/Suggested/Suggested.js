import React from 'react';
import '../../Styles/Suggested/Suggested.css';
import SuggestedItem from './SuggestedItem';

class Suggested extends React.Component {
    render() {
        const { selected, suggested, selectedFunction } = this.props;

        const renderSuggested = suggested.map((gradient) => (
            <SuggestedItem
                gradient={gradient}
                selected={selected === gradient.name}
                key={'suggesteditem-' + gradient.name}
                selectedFunction={(e) => selectedFunction(e, gradient.name)}
            />
        ));

        return (
            <div className='suggested-container'>
                <h2>SUGGESTED</h2>
                <div className='suggested-content'>{renderSuggested}</div>
            </div>
        );
    }
}

export default Suggested;

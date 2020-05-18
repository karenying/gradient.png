import React from 'react';
import '../../Styles/Suggested/Suggested.css';
import SuggestedItem from './SuggestedItem';
import { KAREN, DORA, STEVEN } from '../../Utils/gradientConstants';

class Suggested extends React.Component {
    state = {
        suggested: [KAREN, DORA, STEVEN], // gradient objects
    };

    render() {
        const { suggested } = this.state;

        const renderSuggested = suggested.map((gradient) => (
            <SuggestedItem gradient={gradient} />
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

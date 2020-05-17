import React from 'react';
import '../../Styles/Suggestions/Suggestions.css';
import SuggestionsItem from './SuggestionsItem';
import { Gradient } from '../../Utils/Gradient';

class Suggestions extends React.Component {
    state = {
        suggestions: [], // gradient objects
    };
    render() {
        return <div className='suggestions-container'></div>;
    }
}

export default Suggestions;

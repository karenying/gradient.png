import React from 'react';
import './App.css';
import HexPicker from './Components/HexPicker/HexPicker';

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <HexPicker />
            </div>
        );
    }
}

export default App;

import React from 'react';
import './App.css';
import Header from './Components/Header';
import HexPicker from './Components/HexPicker/HexPicker';

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Header />
                <HexPicker />
            </div>
        );
    }
}

export default App;

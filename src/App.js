import React from 'react';
import './App.css';
import Header from './Components/Header';
import HexPicker from './Components/HexPicker/HexPicker';
import Stack from './Components/Stack/Stack';
import Suggested from './Components/Suggested/Suggested';

class App extends React.Component {
    state = {
        gradient: '',
        selected: '#000000', // color selected out of gradient
        dimensions: [], // dimensions of generated image
    };

    render() {
        return (
            <div className='App'>
                <Header />
                <div className='left'>
                    <div className='color-picker'>
                        <HexPicker />
                        <div className='color-picker-right'>
                            <Stack />
                            <Suggested />
                        </div>
                    </div>
                </div>
                <div className='right'></div>
            </div>
        );
    }
}

export default App;

import React from 'react';
import './App.css';
import Header from './Components/Header';
import HexPicker from './Components/HexPicker/HexPicker';
import Stack from './Components/Stack/Stack';

class App extends React.Component {
    state = {
        stack: [], // stack of colors
        selected: '#000000', // color selected out of stack
        dimensions: [], // dimensions of generated image
        linear: true, // false = radial
        degrees: 180, // if linear
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
                        </div>
                    </div>
                </div>
                <div className='right'></div>
            </div>
        );
    }
}

export default App;

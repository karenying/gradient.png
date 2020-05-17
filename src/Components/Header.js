import React from 'react';
import '../Styles/Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className='header-container'>
                <h1>
                    gradient
                    <span
                        style={{
                            fontFamily: 'Times New Roman',
                            fontWeight: 'bold',
                            fontSize: '37px',
                        }}
                    >
                        .
                    </span>
                    jpg
                </h1>
            </div>
        );
    }
}

export default Header;

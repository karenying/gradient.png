import React from 'react';
import '../Styles/Header.css';
import logo from '../Assets/logo.png';

function Header(props) {
    /*
        const { gradient } = this.props;
        const background = gradient.generateBackgroundString(); */

    return (
        <div className='header-container'>
            <img src={logo} alt='logo'></img>
            <h1 /*
                    style={{
                        background,
                        backgroundClip: 'text',
                        color: 'transparent',
                    }} */
            >
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

export default Header;

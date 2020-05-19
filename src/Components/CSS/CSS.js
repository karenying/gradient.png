import React from 'react';
import '../../Styles/CSS/CSS.css';
import CopyButton from './CopyButton';

class CSS extends React.Component {
    copy = (e) => {
        this.textArea.select();
        document.execCommand('copy');
        e.target.focus();
    };

    render() {
        const { gradient } = this.props;
        const background = gradient.generateBgDisplayString();

        return (
            <div className='css-container'>
                <h2>CSS</h2>
                <div className='css-content'>
                    <textarea
                        name='text'
                        rows='10'
                        cols='10'
                        wrap='soft'
                        value={background}
                        ref={(textarea) => (this.textArea = textarea)}
                    ></textarea>
                    <CopyButton clickFunction={(e) => this.copy(e)} />
                </div>
            </div>
        );
    }
}

export default CSS;

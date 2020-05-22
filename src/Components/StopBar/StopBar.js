import React from 'react';
import '../../Styles/StopBar/StopBar.css';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';

function StopBar(props) {
    const { gradient, handleStopSlider } = props;
    const background = gradient.toStopBarBgString();
    const stopValues = gradient.getSortedStops();

    const StopBarSlider = withStyles({
        root: {
            color: 'gray',
            marginTop: 20,
            borderRadius: 4,
            paddingLeft: 10,
        },
        thumb: {
            height: 50,
            width: 10,
            backgroundColor: 'transparent',
            opacity: 50,
            borderRadius: 5,
            border: '2px solid currentColor',
            marginTop: -5,
            marginLeft: 5,
            marginRight: 5,
            '&:focus, &:hover, &$active': {
                boxShadow: 'inherit',
            },
        },
        active: {},
        valueLabel: {
            left: 'calc(-50% + 4px)',
        },
        track: {
            height: 40,
            borderRadius: 4,
            background: 'transparent',
        },
        rail: {
            height: 40,
            borderRadius: 4,
            background,
            opacity: 100,
        },
    })(Slider);

    return (
        <div className='stopbar-container'>
            <StopBarSlider
                aria-label='stop bar slider'
                defaultValue={stopValues}
                step={1}
                onChangeCommitted={(e, value) => handleStopSlider(value)}
            />
        </div>
    );
}

export default StopBar;

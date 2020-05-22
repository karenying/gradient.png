import React from 'react';
import {
    RadioGroup,
    FormControl,
    FormControlLabel,
    Radio,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { LABEL_GRAY, HOVER_GRAY } from '../../Utils/hexConstants';

const GrayRadio = withStyles({
    root: {
        color: LABEL_GRAY,
        '&$checked': {
            color: LABEL_GRAY,
        },
        '&:hover': {
            background: HOVER_GRAY,
        },
    },
    checked: {},
})((props) => <Radio color='default' {...props} />);

function LinearRadial(props) {
    const { isLinear, changeFunction } = props;
    const value = isLinear ? 'linear' : 'radial';

    return (
        <FormControl component='fieldset' style={{ marginLeft: '20px' }}>
            <RadioGroup
                aria-label='linearRadial'
                name='linearRadial'
                value={value}
                onChange={changeFunction}
            >
                <FormControlLabel
                    value='linear'
                    control={<GrayRadio />}
                    label='LINEAR'
                    title='Linear gradient'
                />
                <FormControlLabel
                    value='radial'
                    control={<GrayRadio />}
                    label='RADIAL'
                    title='Radial gradient'
                />
            </RadioGroup>
        </FormControl>
    );
}

export default LinearRadial;

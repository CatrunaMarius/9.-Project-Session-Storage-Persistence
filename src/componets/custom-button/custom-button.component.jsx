import React from 'react';

import './custom-button.styles.scss';

//exportam  componenta state

const CustomButton = ( {children, ...otherProps}) => (
    <button className='custom-button' {...otherProps}>
        {children}

    </button>
)



export default CustomButton;
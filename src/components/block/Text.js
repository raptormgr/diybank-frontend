import React, { useState } from 'react'

const Text = props => {
    const text = props.shortLabel ? props.shortLabel : props.label
    return (
        <p
            style={{
                paddingLeft: '14px',
                fontSize: '19px',
                marginBottom: 0,
            }}
        >
            {text}
        </p>
    )
}

export default Text

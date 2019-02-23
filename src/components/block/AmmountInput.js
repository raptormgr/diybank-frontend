import React, { useState } from 'react'
import { Input } from 'antd'

const AmmountInput = props => {
    return (
        <div>
            <Input style={{ width: '200px' }} placeholder="количество в рублях" />{' '}
            <span style={{ fontSize: '19px', marginLeft: '5px' }}>₽</span>
        </div>
    )
}

export default AmmountInput

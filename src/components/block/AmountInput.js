import React, { useState } from 'react'
import { Input, Select } from 'antd'

const AmountInput = props => {
    return (
        <div>
            {props.type === 'condition' &&
            <Select style={{ width: '40px', marginRight: '10px' }} placeholder="" defaultValue="gt">
                <Select.Option value="equals" key="equals">=
                </Select.Option>
                <Select.Option value="gt" key="gt">&gt;</Select.Option>
                <Select.Option value="lt" key="lt">&lt;</Select.Option>
                <Select.Option value="gte" key="gte">&gte;
                </Select.Option>
                <Select.Option value="lte" key="lte">&lte;
                </Select.Option>
            </Select>
            }
            <Input style={{ width: '200px' }} placeholder="количество в рублях" />{' '}
            <span style={{ fontSize: '19px', marginLeft: '5px' }}>₽</span>
        </div>
    )
}

export default AmountInput

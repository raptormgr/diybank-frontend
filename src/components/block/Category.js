import React, { useState } from 'react'
import { Select } from 'antd'

const Category = (props) => {
    return (
        <>  
            <span style={{marginRight: '10px'}}>в категории</span>
            <Select style={{ width: '200px'}} placeholder="" defaultValue="food" showSearch>
                <Select.Option value="alcohol" key="alcohol">Алкоголь
                </Select.Option>
                <Select.Option value="home" key="home">Дом</Select.Option>
                <Select.Option value="restaraunt" key="restaraunt">Ресторан</Select.Option>
                <Select.Option value="kids" key="kids">Дети</Select.Option>
                <Select.Option value="food" key="food">Еда</Select.Option>
                <Select.Option value="auto" key="auto">Авто</Select.Option>
            </Select>
        </>
    )
}

export default Category
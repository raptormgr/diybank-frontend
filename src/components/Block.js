import React from 'react'
import { Button } from 'antd'

const Block = props => {
    return (
        <div className="block-single">
            {props.label}
            <Button onClick={props.removeBlock} shape="circle" icon="close" size="small" style={{float: 'right'}}/>
        </div>
    )
}

export default Block

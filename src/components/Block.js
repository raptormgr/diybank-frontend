import React from 'react'
import { Button } from 'antd'
import BankAccount from './block/BankAccount'
import AmmountInput from './block/AmmountInput'
import Category from './block/Category'
import Date from './block/Date'
import Text from './block/Text'

const componentToRender = (component, props) => {
    switch (component) {
        case 'BANK_ACCOUNT':
            return <BankAccount {...props} />
        case 'AMMOUNT_INPUT':
            return <AmmountInput {...props} />
        case 'CATEGORY':
            return <Category {...props} />
        case 'TEXT':
            return <Text {...props} />
        case 'DATE':
            return <Date {...props} />

        default:
            return <p>UNDEFINED</p>
    }
}

const Block = props => {
    console.log(props)
    return (
        <div className="block-single">
            <Button
                onClick={props.removeBlock}
                shape="circle"
                icon="close"
                size="small"
                style={{ float: 'right' }}
            />
            {componentToRender(props.component, props)}
        </div>
    )
}

export default Block

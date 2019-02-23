import React, { useState } from 'react'
import { Select, DatePicker } from 'antd'
import { bankAccounts } from './../../consts/bankAccounts'

const BankAccount = props => {
    let transferText, dateText, selectType, transferToText
    switch (props.label) {
        case 'Потратил':
            transferText = 'Потратил со счета'
            dateText = 'за'
            selectType = 'period'
            break

        case 'Баланс':
            transferText = 'Баланс счета'
            dateText = 'на'
            selectType = 'onDate'
            break

        case 'Перевод':
            transferText = 'Перевод со счета'
            transferToText = 'на счет'
            selectType = 'none'
            break

        case 'Заблокировать':
            transferText = 'Заблокировать счет'
            dateText = 'на'
            selectType = 'period'
            break

        default:
            transferText = ''
            dateText = ''
            selectType = 'none'
    }
    return (
        <div>
            <span style={{ marginRight: '10px' }}>{transferText}</span>
            <Select style={{ width: '250px' }} placeholder="выберите счет">
                {bankAccounts.map(account => {
                    return (
                        <Select.Option value={account.number} key={account.number}>{`${
                            account.name
                        } (${account.number})`}</Select.Option>
                    )
                })}
            </Select>
            {transferToText && (
                <div style={{marginTop: '10px'}}>
                    <span style={{ marginRight: '10px' }}>{transferToText}</span>
                    <Select style={{ width: '250px' }} placeholder="выберите счет">
                        {bankAccounts.map(account => {
                            return (
                                <Select.Option value={account.number} key={account.number}>{`${
                                    account.name
                                } (${account.number})`}</Select.Option>
                            )
                        })}
                    </Select>
                </div>
            )}
            {(selectType === 'period' || selectType === 'onDate') && (
                <div style={{ marginTop: '10px' }}>
                    <span style={{ marginRight: '10px', marginLeft: '15px' }}>{dateText}</span>
                    {selectType === 'period' && (
                        <Select style={{ width: '170px' }} placeholder="выберите период">
                            <Select.Option value="day" key="day">
                                день
                            </Select.Option>
                            <Select.Option value="week" key="week">
                                неделя
                            </Select.Option>
                            <Select.Option value="month" key="month">
                                месяц
                            </Select.Option>
                            <Select.Option value="year" key="year">
                                год
                            </Select.Option>
                        </Select>
                    )}
                    {selectType === 'onDate' && <DatePicker placeholder="выберите дату" />}
                </div>
            )}
        </div>
    )
}

export default BankAccount

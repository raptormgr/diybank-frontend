import React, { useState } from 'react'
import { Select, DatePicker } from 'antd'
import { bankAccounts } from './../../consts/bankAccounts'
import 'moment/locale/ru';

const ruRu = {
    "lang": {
      "placeholder": "Select date",
      "rangePlaceholder": ["Start date", "End date"],
      "today": "Сегодня",
      "now": "Now",
      "backToToday": "Back to today",
      "ok": "Ok",
      "clear": "Clear",
      "month": "Month",
      "year": "Year",
      "timeSelect": "Select time",
      "dateSelect": "Select date",
      "monthSelect": "Choose a month",
      "yearSelect": "Choose a year",
      "decadeSelect": "Choose a decade",
      "yearFormat": "YYYY",
      "dateFormat": "M/D/YYYY",
      "dayFormat": "D",
      "dateTimeFormat": "M/D/YYYY HH:mm:ss",
      "monthFormat": "MMMM",
      "monthBeforeYear": true,
      "previousMonth": "Previous month (PageUp)",
      "nextMonth": "Next month (PageDown)",
      "previousYear": "Last year (Control + left)",
      "nextYear": "Next year (Control + right)",
      "previousDecade": "Last decade",
      "nextDecade": "Next decade",
      "previousCentury": "Last century",
      "nextCentury": "Next century"
    },
    "timePickerLocale": {
      "placeholder": "Select time"
    },
    "dateFormat": "YYYY-MM-DD",
    "dateTimeFormat": "YYYY-MM-DD HH:mm:ss",
    "weekFormat": "YYYY-wo",
    "monthFormat": "YYYY-MM"
  }

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
            <Select style={{ width: '250px' }} placeholder="выберите счет" showSearch>
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
                    <Select style={{ width: '250px' }} placeholder="выберите счет" showSearch>
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
                        <Select style={{ width: '170px' }} placeholder="выберите период" showSearch>
                            <Select.Option value="day" key="day">
                                день
                            </Select.Option>
                            <Select.Option value="week" key="week">
                                неделю
                            </Select.Option>
                            <Select.Option value="month" key="month">
                                месяц
                            </Select.Option>
                            <Select.Option value="year" key="year">
                                год
                            </Select.Option>
                        </Select>
                    )}
                    {selectType === 'onDate' && 
        <DatePicker placeholder="выберите дату" format="DD.MM.YYYY" locale={ruRu} />}
                </div>
            )}
        </div>
    )
}

export default BankAccount

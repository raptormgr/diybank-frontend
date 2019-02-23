export const buttonTypes = {
    conditions: [
        {
            name: 'spent',
            label: 'Потратил',
            component: 'BANK_ACCOUNT'
        },
        {
            name: 'balance',
            label: 'Баланс',
            component: 'BANK_ACCOUNT'
        },
        {
            name: 'count',
            label: 'Количество',
            component: 'AMMOUNT_INPUT'
        },
        {
            name: 'category',
            label: 'Категория',
            component: 'CATEGORY'
        },
        {
            name: 'bigger',
            label: 'Больше',
            shortLabel: '>',
            component: 'TEXT'
        },
        {
            name: 'lower',
            label: 'Меньше',
            shortLabel: '<',
            component: 'TEXT'
        },
        {
            name: 'and',
            label: 'и',
            component: 'TEXT'
        },
        {
            name: 'or',
            label: 'или',
            component: 'TEXT'
        },
        {
            name: 'equals',
            label: 'равно',
            component: 'TEXT',
            shortLabel: '=',
        },
    ],
    actions: [
        {
            name: 'transfer',
            label: 'Перевод',
            component: 'BANK_ACCOUNT'
        },
        {
            name: 'disable',
            label: 'Заблокировать',
            component: 'BANK_ACCOUNT'
        },
        {
            name: 'count',
            label: 'Количество',
            component: 'AMMOUNT_INPUT'
        },
        {
            name: 'and',
            label: 'и',
            component: 'TEXT'
        },
        {
            name: 'or',
            label: 'или',
            component: 'TEXT'
        },
    ],
}

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Block from './../components/Block'
import { buttonTypes } from './../consts/buttonTypes'
import { Row, Col, Icon, Button, Empty, Tabs, Table } from 'antd'
 
const columns = [{
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
    render: (text, row) => <Link to={`/custom/payments/${row.id}`}>{text}</Link>,
  }, {
    title: 'Дата редактирования',
    dataIndex: 'updatedAt',
    align: 'center',
    key: 'updatedAt',
  }, {
    title: 'Дата создания',
    dataIndex: 'createdAt',
    align: 'center',
    key: 'createdAt',
  }, {
    title: 'Условия',
    key: 'conditions',
    align: 'center',
    dataIndex: 'conditions',
  }, {
    title: 'Действия',
    key: 'actions',
    align: 'center',
    dataIndex: 'actions',
  }, {
    title: '',
    key: 'action',
    align: 'center',
    render: (text, record) => (
        <a href="javascript:;">Удалить</a>
    ),
  }];
const data = [{
    key: '1',
    id: '1',
    name: 'Платеж 1',
    updatedAt: '',
    createdAt: '24.02.2019',
    conditions: 3,
    actions: 2,
  },{
    key: '2',
    id: '2',
    name: 'Платеж 2',
    updatedAt: '24.02.2019',
    createdAt: '24.02.2019',
    conditions: 1,
    actions: 1,
  },{
    key: '3',
    id: '3',
    name: 'Платеж 3',
    updatedAt: '24.02.2019',
    createdAt: '23.02.2019',
    conditions: 2,
    actions: 1,
  }];

var id = function() {
    return (
        '_' +
        Math.random()
            .toString(36)
            .substr(2, 9)
    )
}
const Payments = (props) => {
    const [activeTab, setActiveTab] = useState('1')
    const [selectedCaseID, setSelectedCaseID] = useState(undefined)
    const [blocks, setBlocks] = useState([
        {
            type: 'condition',
            name: 'spent',
            label: 'Потратил',
            id: id(),
            component: 'BANK_ACCOUNT'
        },
    ])
    useEffect(() => {
        console.log(selectedCaseID)
        if(!props.match.params.id) {
            setSelectedCaseID(undefined)
        }
        if(props.match.params.id !== selectedCaseID) {
            setSelectedCaseID(props.match.params.id)
            setActiveTab('1')
        }
    })

    const addBlock = block => {
        const filteredBlocks = blocks.filter(item => item.type === block.type)
        if (filteredBlocks.length === 0 || (filteredBlocks.length > 0 && filteredBlocks[filteredBlocks.length - 1].name !== block.name)) {
            let newBlocks = blocks.slice(0)
            newBlocks.push(block)
            setBlocks(newBlocks)
        }
    }

    const removeBlock = id => {
        let newBlocks = blocks.slice(0).filter(item => item.id !== id)
        setBlocks(newBlocks)
    }

    const saveForm = () => {
        alert('save');
    }
    return (
            <div className="content" style={{ padding: '30px 30px 30px 30px', minHeight: '700px' }}>
                <div style={{
    display: "inline-block",
    position: "absolute",
    top: "263px"}}>
                    <Icon type="box-plot" style={{ fontSize: '30px', float: 'left' }} />
                    <p
                        style={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            marginLeft: '50px',
                        }}
                    >
                        DIY платежи
                    </p>
                </div>

                <Tabs type="card" activeKey={activeTab} onTabClick={(tab) => setActiveTab(tab)}>
                    <Tabs.TabPane tab="Платеж" key="1">
                    
                <Row gutter={16}>
                    <Col
                        span={6}
                        style={{
                            height: '400px',
                        }}
                    >
                        <p style={{ fontSize: '20px' }}>Условия</p>
                        {buttonTypes.conditions.map(item => (
                            <Button
                                key={item.name}
                                onClick={() =>
                                    addBlock({
                                        type: 'condition',
                                        ...item,
                                        id: id(),
                                    })
                                }
                                style={{ marginRight: '10px', marginBottom: '15px' }}
                            >
                                {item.label}
                            </Button>
                        ))}
                        <p style={{ fontSize: '20px', marginTop: '15px' }}>Действия</p>
                        {buttonTypes.actions.map(item => (
                            <Button
                                key={item.name}
                                onClick={() =>
                                    addBlock({
                                        type: 'action',
                                        ...item,
                                        id: id(),
                                    })
                                }
                                style={{ marginRight: '10px', marginBottom: '15px' }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Col>
                    <Col span={1} style={{ borderRight: '1px solid #DEDEDE' }} />
                    <Col span={16} offset={1}>
                        <Button style={{ float: 'right' }} icon="undo" onClick={() => setBlocks([])}>
                            Сбросить
                        </Button>
                        <p style={{ fontSize: '20px' }}>Создайте свой алгоритм</p>
                        <div style={{ marginBottom: '20px', minHeight: '400px', border: '1px solid #DEDEDE', borderRadius: '5px', padding: '20px' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <p style={{ fontSize: '18px' }}>
                                        Если... <span style={{ fontSize: '12px', fontStyle: 'italic' }}>(условия)</span>
                                    </p>
                                    {blocks &&
                                        blocks
                                            .filter(item => item.type === 'condition')
                                            .map(block => (
                                                <Block
                                                    key={block.id}
                                                    label={block.shortLabel ? block.shortLabel : block.label}
                                                    {...block}
                                                    removeBlock={() => removeBlock(block.id)}
                                                />
                                            ))}
                                </Col>
                                <Col span={12}>
                                    <p style={{ fontSize: '18px' }}>
                                        то... <span style={{ fontSize: '12px', fontStyle: 'italic' }}>(действия)</span>
                                    </p>
                                    {blocks &&
                                        blocks
                                            .filter(item => item.type === 'action')
                                            .map(block => (
                                                <Block
                                                    key={block.id}
                                                    label={block.shortLabel ? block.shortLabel : block.label}
                                                    {...block}
                                                    removeBlock={() => removeBlock(block.id)}
                                                />
                                            ))}
                                </Col>
                            </Row>
                            {blocks.length === 0 && <Empty style={{ marginTop: '83px' }} description={<span>Добавьте условия и действия</span>} />}
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Button icon="check" type="primary" style={{width:'130px'}} onClick={saveForm}>Сохранить</Button>
                        </div>
                    </Col>
                </Row>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Сохраненные" key="2">
                        <Table columns={columns} dataSource={data} />
                    </Tabs.TabPane>
                </Tabs>
            </div>
    )
}

export default Payments

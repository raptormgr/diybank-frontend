import React, { useState } from 'react'
import Header from './../components/Header'
import Footer from './../components/Footer'
import Block from './../components/Block'
import { buttonTypes } from './../consts/buttonTypes'
import { Row, Col, Icon, Button, Empty } from 'antd'

var id = function() {
    return (
        '_' +
        Math.random()
            .toString(36)
            .substr(2, 9)
    )
}
const Payments = () => {
    const [blocks, setBlocks] = useState([
        {
            type: 'condition',
            name: 'spent',
            label: 'Потратил',
            id: id(),
            component: 'BANK_ACCOUNT'
        },
    ])

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
        <>
            <Header />
            <div className="content" style={{ padding: '30px 30px 30px 30px' }}>
                <Row gutter={16}>
                    <Col span={24}>
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
                    </Col>
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
            </div>
            <Footer />
        </>
    )
}

export default Payments

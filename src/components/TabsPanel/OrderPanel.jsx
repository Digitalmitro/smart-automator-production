import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Order.scss"
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import img5 from "../../assets/img5.jpg"


export const OrderPanel = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const [orders, setOrders] = useState([


    ]);

    const ordersList = [
        { id: 1, details: 'Drakon Card Azure Blue', price: 259, status: 'Completed', date: 'just now' },
        { id: 2, details: 'Phoenix Ring', price: 99, status: 'Cancelled', date: '1 day ago' },
        { id: 3, details: 'Drakon Card Azure Blue', price: 259, status: 'Pending', date: 'just now' },
        { id: 4, details: 'Phoenix Ring', price: 99, status: 'Completed', date: '1 day ago' },
        { id: 5, details: 'Drakon Card Azure Blue', price: 259, status: 'Cancelled', date: 'just now' },
        { id: 6, details: 'Phoenix Ring', price: 99, status: 'Pending', date: '1 day ago' },
        { id: 7, details: 'Drakon Card Azure Blue', price: 259, status: 'Completed', date: 'just now' },
        { id: 8, details: 'Phoenix Ring', price: 99, status: 'Pending', date: '1 day ago' },
    ]

    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 3; // Set the number of orders per page

    // Get the current orders to display on the page
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = ordersList.slice(indexOfFirstOrder, indexOfLastOrder);

    // Handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Scroll to top when the page changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);


    return (
        <>
            <div className="orderPanel">
                <h4>Order History</h4>

                {/* Orders Table */}
                <table className="orderTable">
                    <thead>
                        <tr>
                            <th>Order Details</th>
                            <th>Order Status</th>
                            <th>Order Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentOrders.map(order => (
                            <tr key={order.id}>
                                <td>
                                    <p>#OrderID - {order.id}</p>
                                    <div className="productsDetails">
                                        <div>
                                            {/* <img src={img5} alt="" /> */}
                                        </div>
                                        <div>
                                            <p><b>{order.details}</b></p>
                                            <p><b>${order.price}</b></p>
                                        </div>
                                    </div>
                                </td>

                                <td style={{
                                    color: order.status === 'Cancelled' ? 'red' :
                                        order.status === 'Pending' ? '#ffb100' :
                                            order.status === 'Completed' ? 'green' : 'inherit'
                                }}>
                                    <p className={`statusColumn 
              ${order.status === 'Cancelled' ? 'statusCancelled' : ''} 
              ${order.status === 'Pending' ? 'statusPending' : ''} 
              ${order.status === 'Completed' ? 'statusCompleted' : ''}`
                                    }>
                                        {order.status}
                                    </p>
                                </td>

                                <td><p>{order.date}</p></td>

                                <td className="buttonList">
                                    <p><button>Order Details</button></p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="pagination">
                    {Array.from({ length: Math.ceil(orders.length / ordersPerPage) }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => paginate(index + 1)}
                            className={`pagination-button ${currentPage === index + 1 ? 'pagination-button-active' : ''}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>

        </>
    );
};



const AntDrawer = ({ setOpen, open }) => {
    const onClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Drawer
                title="Address"
                width={520}
                onClose={onClose}
                open={open}
                className='drawerHeaders'
                styles={{
                    body: {
                        paddingBottom: 100,
                    },
                }}

            >
                <Form layout="vertical" hideRequiredMark>
                    <Row gutter={20}>
                        <Col span={20} className='columns'>
                            <Form.Item
                                name="name"
                                label="Name"
                                className='labels'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Enter Name',
                                    },
                                ]}
                            >
                                <Input placeholder="Enter Name" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={20}>
                        <Col span={20} className='columns'>
                            <Form.Item
                                name="Country/Region"
                                label="Country/Region"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Enter Country/Region',
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: '100%',
                                    }}

                                    placeholder="Enter Country/Region"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={20}>
                        <Col span={20} className='columns'>
                            <Form.Item
                                name="Street Address"
                                label="Street Address"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Eelect an Street Address',
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: '100%',
                                    }}

                                    placeholder="Enter Street Address"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={20} className='columns'>
                            <Form.Item
                                name="town/city"
                                label="town/city"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Ehoose the town/city',
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: '100%',
                                    }}

                                    placeholder="Enter town/city"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={20}>
                        <Col span={20} className='columns'>
                            <Form.Item
                                name="state"
                                label="state"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Ehoose the state',
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: '100%',
                                    }}

                                    placeholder="Enter state"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={20} className='columns'>
                            <Form.Item
                                name="pincode"
                                label="pincode"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Ehoose the pincode',
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: '100%',
                                    }}

                                    placeholder="Enter pincode"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={20} className='columns'>
                        <Col span={20} className='columns'>
                            <Form.Item
                                name="phone"
                                label="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Enter phone',
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: '100%',
                                    }}

                                    placeholder="Enter phone"
                                />

                            </Form.Item>
                        </Col>

                        <Col span={20} className='columns'>
                            <Form.Item
                                name="Email Address"
                                label="Email Address"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Enter Email Address',
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: '100%',
                                    }}

                                    placeholder="Enter Email Address"
                                />

                            </Form.Item>
                        </Col>
                    </Row>

                    <Space>
                        <Button onClick={onClose} className='cancelButton'>Cancel</Button>
                        <Button onClick={onClose} type="primary"
                            className='submitButton'>
                            Submit
                        </Button>
                    </Space>
                </Form>
            </Drawer>
        </div>
    )
}

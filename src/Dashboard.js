import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    const todaysOrdersData = [
        { logo: 'path/to/logo1.svg', quantity: 2, price: '$20' },
        { logo: 'path/to/logo2.svg', quantity: 1, price: '$10' },
        { logo: 'path/to/logo3.svg', quantity: 5, price: '$50' },
        { logo: 'path/to/logo4.svg', quantity: 3, price: '$30' },
    ];

    const monthlyOrdersData = [
        { logo: 'path/to/logo1.svg', quantity: 20, price: '$200' },
        { logo: 'path/to/logo2.svg', quantity: 10, price: '$100' },
        { logo: 'path/to/logo3.svg', quantity: 50, price: '$500' },
        { logo: 'path/to/logo4.svg', quantity: 30, price: '$300' },
    ];

    const summaryData = [
        { logo: 'path/to/logo1.svg', quantity: 50, price: '$500' },
        { logo: 'path/to/logo2.svg', quantity: 30, price: '$300' },
    ];

    const monthlySummaryData = [
        { logo: 'path/to/logo1.svg', quantity: 150, price: '$1500' },
        { logo: 'path/to/logo2.svg', quantity: 90, price: '$900' },
    ];

    return (
        <div className="dashboard">
            <div className="orders-summary-container">
                <div className="card orders">
                    <h2>Today's Orders</h2>
                    <div className="orders-container">
                        {todaysOrdersData.map((order, index) => (
                            <div className="order-card" key={index}>
                                <img src={order.logo} alt={`Order ${index + 1}`} className="order-logo" />
                                <p className="order-price">{order.price}</p>
                                <p className="order-quantity">Orders: {order.quantity}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card summary">
                    <h2>Summary</h2>
                    <div className="summary-container">
                        {summaryData.map((order, index) => (
                            <div className="order-card" key={index}>
                                <img src={order.logo} alt={`Summary ${index + 1}`} className="order-logo" />
                                <p className="order-price">{order.price}</p>
                                <p className="order-quantity">Orders: {order.quantity}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="orders-summary-container">
                <div className="card orders">
                    <h2>Monthly Orders</h2>
                    <div className="orders-container">
                        {monthlyOrdersData.map((order, index) => (
                            <div className="order-card" key={index}>
                                <img src={order.logo} alt={`Monthly Order ${index + 1}`} className="order-logo" />
                                <p className="order-price">{order.price}</p>
                                <p className="order-quantity">Orders: {order.quantity}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card summary">
                    <h2>Monthly Summary</h2>
                    <div className="summary-container">
                        {monthlySummaryData.map((order, index) => (
                            <div className="order-card" key={index}>
                                <img src={order.logo} alt={`Monthly Summary ${index + 1}`} className="order-logo" />
                                <p className="order-price">{order.price}</p>
                                <p className="order-quantity">Orders: {order.quantity}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
